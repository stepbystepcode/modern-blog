import { cache } from 'react'
import {supabase} from "@/lib/supabaseClient";
import {toast} from "sonner";
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
        tags: post.tags
    })) : [];
    return posts
})

export const createPost = async (val:Post)=>{
await supabase
    .from('posts')
    .insert(val)
    .select()
}
export const deletePosts = (val: (number | undefined)[]) => {
    val?.map(async (i)=>{
        const {error}=await supabase
            .from('posts')
            .delete()
            .eq('id', i)
        if(error) toast("error")
        else toast("删除成功")
        }
    )
}