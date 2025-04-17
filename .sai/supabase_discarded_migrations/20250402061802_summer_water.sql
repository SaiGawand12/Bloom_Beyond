/*
  # Fix profile policies for registration
  
  1. Changes
    - Update RLS policies to allow profile creation during registration
    - Simplify policy structure
    - Fix security policies
  
  2. Security
    - Enable RLS
    - Add proper policies for profile management
    - Ensure secure user registration flow
*/

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Drop existing policies to start fresh
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Public profiles are viewable by everyone" ON public.profiles;
  DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
  DROP POLICY IF EXISTS "Users can update own profile" ON public.profiles;
  DROP POLICY IF EXISTS "Enable insert for users only" ON public.profiles;
  DROP POLICY IF EXISTS "Enable read access for all users" ON public.profiles;
  DROP POLICY IF EXISTS "Enable update for users based on id" ON public.profiles;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Create new policies with proper permissions
CREATE POLICY "Enable read access for all users"
  ON public.profiles FOR SELECT
  USING (true);

-- Allow public insert during registration
CREATE POLICY "Enable insert for registration"
  ON public.profiles FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow authenticated users to update their own profile
CREATE POLICY "Enable update for users based on id"
  ON public.profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Update the trigger function to handle profile creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data->>'full_name', '')
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;