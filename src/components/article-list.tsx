import Image from "next/image";
import { getPostList} from "@/app/util";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Eye, MessageCircleMore,ThumbsUp} from "lucide-react";
import Link from "next/link";
{/*{Array(8).fill(list[0])*/}
const list = [
    {
        title: 'iOS 17升级密码功能，苹果给安卓手机们上了一堂课',
        overview: '苹果iOS 15系统正式版已经发布，iOS 15系统的密码功能也将升级，苹果将会在iOS 15系统中推出iCloud密码功能，这个功能可以让用户在iPhone、iPad和Mac上使用iCloud密钥串来存储和同步密码。',
        image: '/items/3.jpg',
        date: '2021-09-12',
        watch: 634,
        comment: 23,
        like: 12,
    }
]
interface Post {
    id: number;
    title: string;
    content: string;
    views: number;
    likes: number;
    comments: number;
}
interface Props{
    data:Post[];

}
const ArticleList = async () => {
    const data = await getPostList();
    return (
        <>
            {data?.map((item:Post, index:number) => {

                return (
                    <div key={index} className="flex gap-3 bg-white dark:bg-[#242525] rounded-lg col-span-6 p-4">
                        <div className="aspect-[220/147] max-[576px]:h-[calc(100vw/4)] h-[9rem]  relative">
                        <Image className="rounded-lg cursor-pointer" src={`https://vyxjlbfzsilnggewbzff.supabase.co/storage/v1/object/public/blog/img/post-cover/${item.id}.jpg`} alt={item.title} layout='fill'
                            objectFit='cover'  />
                        </div>
                        <div className="w-[75%] pt-1 flex flex-col justify-between">
                            <div className="font-bold line-clamp-2 hover:text-blue-600 cursor-pointer"><Link href={`/post/${item.id}`}>{item.title}</Link></div>
                        <div className="font-light line-clamp-2 max-[768px]:hidden">{item.content}</div>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src="/avatar.jpeg" alt="@shadcn"/>
                                    <AvatarFallback>头像</AvatarFallback>
                                </Avatar>
                                <span className="text-sm cursor-pointer hover:text-blue-600">stepbystep</span>
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
            {/*<Pagination className="ml-80">*/}
            {/*    <PaginationContent>*/}
            {/*        <PaginationItem>*/}
            {/*            <PaginationPrevious href="#" />*/}
            {/*        </PaginationItem>*/}
            {/*        <PaginationItem>*/}
            {/*            <PaginationLink href="#">1</PaginationLink>*/}
            {/*        </PaginationItem>*/}
            {/*        <PaginationItem>*/}
            {/*            <PaginationEllipsis />*/}
            {/*        </PaginationItem>*/}
            {/*        <PaginationItem>*/}
            {/*            <PaginationNext href="#" />*/}
            {/*        </PaginationItem>*/}
            {/*    </PaginationContent>*/}
            {/*</Pagination>*/}


        </>
    )
}
export default ArticleList;
export async function getServerSideProps() {
    interface Post {
        id: number;
        title: string;
        content: string;
        author_id: number;
        views: number;
        likes: number;
        tags: string[];
        created_at: string;
    }

}
