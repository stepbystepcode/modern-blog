import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
export const supabase = createClient('https://vyxjlbfzsilnggewbzff.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eGpsYmZ6c2lsbmdnZXdiemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MDY4MTMsImV4cCI6MjAyMDA4MjgxM30.ppfb-d4jB9ko7O1iMb0bpKNiD3lIEebN7CTD5-GWIkM')
//export const supabase = createClient(supabaseUrl, supabaseAnonKey)