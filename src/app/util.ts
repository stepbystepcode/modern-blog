import { cache } from 'react'
import {createClient} from "@supabase/supabase-js";

export const getPost = cache(async (id: string) => {
    const supabase = createClient('https://vyxjlbfzsilnggewbzff.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eGpsYmZ6c2lsbmdnZXdiemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MDY4MTMsImV4cCI6MjAyMDA4MjgxM30.ppfb-d4jB9ko7O1iMb0bpKNiD3lIEebN7CTD5-GWIkM')
    const { data } = await supabase.from('posts').select('*').eq('id', id).single();
    return data
})
export const getPostList = cache(async () => {
    const supabase = createClient('https://vyxjlbfzsilnggewbzff.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ5eGpsYmZ6c2lsbmdnZXdiemZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ1MDY4MTMsImV4cCI6MjAyMDA4MjgxM30.ppfb-d4jB9ko7O1iMb0bpKNiD3lIEebN7CTD5-GWIkM')
    const { data } = await supabase.from('posts').select('title, id, likes, views, content');
    return data
})
