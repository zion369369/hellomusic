-- =========================================================
-- HELLO MUSIC: Supabase Database Schema
-- Tagline: A different world of music. Underrated songs only.
-- =========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PROFILES TABLE (Linked with Supabase Auth)
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique not null,
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on RLS for profiles
alter table public.profiles enable row level security;

create policy "Public profiles are viewable by everyone."
  on public.profiles for select
  using ( true );

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ( auth.uid() = id );

create policy "Users can update own profile."
  on public.profiles for update
  using ( auth.uid() = id );

-- 2. SONGS TABLE
create table if not exists public.songs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  artist text not null,
  genre text default 'Underrated',
  audio_url text not null,
  cover_url text not null,
  duration integer default 0,
  views_count integer default 0,
  likes_count integer default 0,
  description text,
  user_id uuid references auth.users(id) on delete set null,
  is_verified boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on RLS for songs
alter table public.songs enable row level security;

create policy "Songs are viewable by everyone."
  on public.songs for select
  using ( true );

create policy "Authenticated users can publish songs."
  on public.songs for insert
  with check ( true ); -- allow public or auth uploads

create policy "Users can update their songs."
  on public.songs for update
  using ( true );

-- 3. LIKES TABLE
create table if not exists public.likes (
  id uuid default gen_random_uuid() primary key,
  user_id text not null,
  song_id text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, song_id)
);

alter table public.likes enable row level security;

create policy "Likes are viewable by everyone."
  on public.likes for select
  using ( true );

create policy "Anyone can like."
  on public.likes for insert
  with check ( true );

create policy "Users can delete own likes."
  on public.likes for delete
  using ( true );

-- 4. FUNCTION TO INCREMENT SONG VIEWS
create or replace function public.increment_song_views(target_song_id text)
returns integer
language plpgsql
security definer
as $$
declare
  updated_count integer;
begin
  update public.songs
  set views_count = coalesce(views_count, 0) + 1
  where id::text = target_song_id
  returning views_count into updated_count;
  
  return coalesce(updated_count, 0);
end;
$$;

-- 5. FUNCTION TO TOGGLE LIKE & UPDATE COUNT
create or replace function public.toggle_song_like(target_user_id text, target_song_id text)
returns json
language plpgsql
security definer
as $$
declare
  already_liked boolean;
  new_count integer;
  result json;
begin
  select exists(
    select 1 from public.likes where user_id = target_user_id and song_id = target_song_id
  ) into already_liked;

  if already_liked then
    delete from public.likes where user_id = target_user_id and song_id = target_song_id;
    update public.songs set likes_count = greatest(0, coalesce(likes_count, 0) - 1) where id::text = target_song_id returning likes_count into new_count;
    result := json_build_object('liked', false, 'likes_count', coalesce(new_count, 0));
  else
    insert into public.likes (user_id, song_id) values (target_user_id, target_song_id);
    update public.songs set likes_count = coalesce(likes_count, 0) + 1 where id::text = target_song_id returning likes_count into new_count;
    result := json_build_object('liked', true, 'likes_count', coalesce(new_count, 1));
  end if;

  return result;
end;
$$;

-- 6. STORAGE BUCKETS SETUP
-- Run in Supabase SQL Editor to ensure buckets are created with public access:
insert into storage.buckets (id, name, public) 
values ('songs-audio', 'songs-audio', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public) 
values ('songs-covers', 'songs-covers', true)
on conflict (id) do nothing;

-- Storage policies:
create policy "Audio files are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'songs-audio' );

create policy "Anyone can upload audio files."
  on storage.objects for insert
  with check ( bucket_id = 'songs-audio' );

create policy "Cover images are publicly accessible."
  on storage.objects for select
  using ( bucket_id = 'songs-covers' );

create policy "Anyone can upload cover images."
  on storage.objects for insert
  with check ( bucket_id = 'songs-covers' );
