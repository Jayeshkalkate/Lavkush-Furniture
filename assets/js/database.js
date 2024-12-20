import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

async function signUp(email, password) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (user) {
    console.log('User signed up:', user);
  }
  if (error) {
    console.error('Error:', error);
  }
}

async function signIn(email, password) {
  const { user, error } = await supabase.auth.signIn({
    email,
    password
  });
  if (user) {
    console.log('User signed in:', user);
  }
  if (error) {
    console.error('Error:', error);
  }
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    console.log('User signed out');
  }
}
