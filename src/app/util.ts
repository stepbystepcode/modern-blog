import { cache } from 'react'
import {supabase} from "@/lib/supabaseClient";
export const getPost = cache(async (id: string) => {
    const { data } = await supabase.from('posts').select('*').eq('id', id).single();
    return data
})
export const getPostList = cache(async () => {
    const { data } = await supabase.from('posts').select('title, id, likes, views, content,comments,type,created_at,tags');
    const posts: Post[] = data ? data.map((post: any) => ({
        id: post.id,
        title: post.title,
        likes: post.likes,
        views: post.views,
        content: post.content,
        comments: post.comments,
        type: post.type,
        created_at: post.created_at,
        tags: post.tags
    })) : [];
    return posts
})
