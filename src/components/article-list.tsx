import Image from "next/image";
import { getPostList} from "@/app/util";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Eye, MessageCircleMore,ThumbsUp} from "lucide-react";
import Link from "next/link";
const ArticleList = async () => {
    const data = await getPostList();
    return (
        <>
            {data?.map((item:Post, index:number) => {

                return (
                    <div key={index} className="flex gap-3 bg-white dark:bg-[#242525] rounded-lg col-span-6 p-4">
                        <div className="aspect-[220/147] max-[576px]:h-[calc(100vw/4)] h-[9rem]  relative">
                        <Image className="rounded-lg cursor-pointer" src={`https://vyxjlbfzsilnggewbzff.supabase.co/storage/v1/object/public/blog/img/post-cover/${item.id}.jpg`} alt={item.title} sizes='auto'
                            fill  />
                        </div>
                        <div className="w-[75%] pt-1 flex flex-col justify-between">
                            <div className="font-bold line-clamp-2 hover:text-blue-600 cursor-pointer"><Link href={`/post/${item.id}`}>{item.title}</Link></div>
                        <div className="font-light line-clamp-2 max-[768px]:hidden">{item.content}</div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src="/avatar.jpeg" alt="avatar"/>
                                    <AvatarFallback>头像</AvatarFallback>
                                </Avatar>
                                <span className="text-sm cursor-pointer hover:text-blue-600">StepbyStep</span>
                                </div>
                                <div className="text-gray-500 flex gap-5 scale-75" style={{fontFamily:'Rough Motion'}}>
                                    <div className="flex max-[767px]:hidden gap-1"><Eye />{item.views}</div>
                                    <div className="flex max-[767px]:hidden gap-1"><MessageCircleMore />{item.comments}</div>
                                    <div className="flex text-black gap-1 hover:text-blue-600 cursor-pointer transition-all"><ThumbsUp />{item.likes}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
export default ArticleList;