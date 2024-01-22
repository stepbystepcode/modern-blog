"use client"
import { navList } from '@/components/admin/menu'
import MDEditor, {ContextStore} from '@uiw/react-md-editor';
import React, {ChangeEvent, useState} from "react";
import {Button} from "@/components/ui/button";
import {createPost} from "@/app/util";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

export default function AdminContent({params: { id },}: { params: { id: string } }) {
    const [value, setValue] = React.useState<string>("");
    const [post, setPost] = useState<Post>({
        type: 1,
        title: '',
        content: '',
        views: 0,
        likes: 0,
        comments: 0,
        tags: [],
    });
    const handleCreate = () =>{
        setPost((prevPost) => ({
            ...prevPost,
            title: post.title,
            content: value,
        }));
        createPost(post).then(r => console.log(r))
    }
    const handleChange: (value?: string | undefined, event?: ChangeEvent<HTMLTextAreaElement> | undefined, state?: ContextStore | undefined) => void = (value) => {
        setValue(value!);
    };
    const handleTypeChange = (selectedValue: string) => {
        const newType = parseInt(selectedValue, 10); // 将字符串转换为数字
        console.log(newType)
        setPost((prev) => ({
            ...prev,
            type: newType,
        }));
    };
    if (id==='create') return <div className="flex flex-col h-[90svh]">
        <div className="flex">
        <Input placeholder="请输入标题" value={post.title} onChange={(e) => setPost((prev) => ({ ...prev, title: e.target.value }))} />
            <Select onValueChange={(value: string) => handleTypeChange(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="发布" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="0">草稿</SelectItem>
                    <SelectItem value="1">发布</SelectItem>
                </SelectContent>
            </Select>
        <Button className="ml-auto" onClick={handleCreate}>保存</Button>
        </div>
        <MDEditor
            value={value}
            height="90svh"
            onChange={handleChange}
        />
    </div>
    else
    return (
        <div className="m-4">
        {navList.filter(item => item.href.split('/').pop() === id)[0]?.content}
        </div>
    )
}