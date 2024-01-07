import {Eye, MessageCircleMore, ThumbsUp, Trophy} from "lucide-react";
import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const HotArticle = () => {
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
    return (
        <div className="rounded-xl bg-white dark:bg-[#242525] p-4">
            <div className="flex gap-1">
            <Trophy className="text-blue-600" />
        <span className="font-bold text-xl">热门文章</span>
            </div>
            {Array(3).fill(list[0]).map((item, index) => {
                return (
                    <div key={index} className="flex gap-3 bg-white dark:bg-[#242525] rounded-lg col-span-6 p-4">
                        <div className="w-[75%]">
                            <div className="font-extralight line-clamp-2 mb-5">{item.title}</div>
                            <span className="text-md text-gray-400" style={{fontFamily:'Rough Motion'}}>{item.date}</span>
                        </div>
                        <div style={{width: '13rem', height: '6rem', position: 'relative'}}>
                            <Image className="rounded-lg" src={item.image} alt={item.title} layout='fill'
                                   objectFit='cover'  />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default HotArticle;
