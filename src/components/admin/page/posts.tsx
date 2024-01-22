"use client"
import dayjs from "dayjs";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox";
import {getPostList} from "@/app/util";
import React, {useEffect, useState} from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {LoadingSpinner} from "@/components/ui/loading"
import {MoreHorizontal} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {deletePosts} from "@/app/util";

const PostsPage: React.FC = () => {
    const handleEdit = () => {
        // 处理编辑操作
        console.log('Edit clicked');
    };

    const handleSettings = () => {
        // 处理设置操作
        console.log('Settings clicked');
    };

    const handleDelete = () => {
        if(list)
        deletePosts(list.filter((_, index) => selectedItems[index])
            .map(({ id }) => id))

    };
    const statusName = (type:number) => type?'已发布':'草稿';
    const [selectType,setSelectType] = useState<string>('全部');
    const [list,setList] = useState<Post[]>();
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState<boolean[]>([]);

    const handleSelectAllChange = () => {
        setSelectAll(!selectAll);
        setSelectedItems(new Array(list?.length).fill(!selectAll));
    };

    const handleChildCheckboxChange = (index:number) => {
        const updatedSelectedItems = [...selectedItems];
        updatedSelectedItems[index] = !updatedSelectedItems[index];

        const allChecked = updatedSelectedItems.every((item) => item);
        setSelectAll(allChecked);

        setSelectedItems(updatedSelectedItems);
    };

    useEffect(() => {
        const fetchData = async () => {
            const data:Post[] = await getPostList();
            setList(data)
            setSelectedItems(new Array(data?.length).fill(false));
        };
        fetchData().then();
    }, []);
    return (
        <>
            <Card className="flex flex-col">
                <div className="flex items-center gap-2 m-4">
                    <Checkbox  checked={selectAll}
                               onCheckedChange={handleSelectAllChange}/>
                    {!selectedItems.some((item) => item) &&<Input className="max-w-52"/>}
                    <Link href={"/console/create"} ><Button>新建文章</Button></Link>
                    {selectedItems.some((item) => item) && <Button onClick={handleDelete} className="bg-red-800">删除</Button>}
                </div>
                <div className="mb-4 mx-4">
                    <Select defaultValue="全部" value={selectType} onValueChange={(val)=>setSelectType(val)}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="全部">全部</SelectItem>
                                <SelectItem value="草稿">草稿</SelectItem>
                                <SelectItem value="已发布">已发布</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Separator />
                <div>
                    {!list && <div className="w-full m-4 flex justify-center"><LoadingSpinner/></div>}
                    {list && list.filter(item=>statusName(item.type)===selectType||selectType==='全部').map((item, index) => {
                        return (
                            <div key={index}>
                            <div className="flex items-center gap-2 m-3">
                                <Checkbox
                                    checked={selectedItems[index] || false}
                                    onCheckedChange={() => handleChildCheckboxChange(index)}
                                />
                                <div className="flex flex-col">
                                    <Link href={`/post/${item.id}`}>
                                    <span className="font-bold text-sm hover:text-gray-600">{item.title}</span>
                                    </Link>
                                    <span className="text-sm text-gray-400">{item.views} 浏览&nbsp;&nbsp;{item.comments} 评论</span>
                                    <div className="flex gap-2">
                                    {
                                        item.tags.map((tag,index)=>{
                                            return (
                                                <span key={index} className="text-sm border border-gray-300 rounded-sm px-1">{tag}</span>
                                            )
                                        })
                                    }</div>
                                </div>
                                <Avatar className="w-6 h-6 ml-auto">
                                    <AvatarImage src="/avatar.jpeg" alt="avatar"/>
                                    <AvatarFallback>头像</AvatarFallback>
                                </Avatar>
                                {statusName(item.type)}
                                <span className="ml-auto text-sm text-gray-400">{dayjs(item.created_at).format('YYYY-MM-DD HH:MM')}</span>
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        <div className="p-1 hover:bg-gray-100">
                                            <MoreHorizontal />
                                        </div>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem onClick={handleEdit}>编辑</DropdownMenuItem>
                                        <DropdownMenuItem onClick={handleSettings}>设置</DropdownMenuItem>
                                        <DropdownMenuItem onClick={handleDelete}>删除</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                               <Separator/>
                                <div>
                                </div>
                            </div>
                        )
                    })}
                    <div className="m-3">
                    共{list&&list.filter(item=>statusName(item.type)===selectType||selectType==='全部').length}个内容
                        </div>
                </div>
            </Card>
        </>
    );
}
export default PostsPage;