"use client"
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
import {MoreHorizontal} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

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
        // 处理删除操作
        console.log('Delete clicked');
    };
    const statusName = (type:number) => type?'已发布':'草稿';
    const [selectType,setSelectType] = useState<string>('全部');
    const [list,setList] = useState<Post[]>();
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([false, false, false]);

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
        };
        fetchData().then();
    }, []);
    return (
        <>
            <Card className="flex flex-col p-4 gap-2">
                <div className="flex items-center gap-2">
                    <Checkbox  checked={selectAll}
                               onCheckedChange={handleSelectAllChange}/>
                    <Input/>
                </div>
                <div>
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
                <div>
                    {list && list.filter(item=>statusName(item.type)===selectType||selectType==='全部').map((item, index) => {
                        return (
                            <div key={index} className="flex items-center gap-2">
                                <Checkbox
                                    checked={selectedItems[index] || false}
                                    onCheckedChange={() => handleChildCheckboxChange(index)}
                                />
                                <div className="flex flex-col">
                                    <span className="font-bold">{item.title}</span>
                                    <span className="text-sm text-gray-400">{item.views}浏览 {item.comments}评论</span>
                                </div>
                                <Avatar className="w-6 h-6 ml-auto">
                                    <AvatarImage src="/avatar.jpeg" alt="avatar"/>
                                    <AvatarFallback>头像</AvatarFallback>
                                </Avatar>
                                {statusName(item.type)}
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
                        )
                    })}
                </div>
            </Card>
        </>
    );
}
export default PostsPage;