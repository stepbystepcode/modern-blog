import {Card} from "@/components/ui/card";
import {Eye, MessageSquareMore, PanelLeft, User} from "lucide-react";
import { Separator } from "@/components/ui/separator"


const DashboardPage = () => {
    const data = {
        posts: 1,
        users: 1,
        comments: 1,
        visits: 1
    }
    const info = [
        {
            label: '文章数',
            icon: <PanelLeft/>,
            value: data.posts
        }, {
            label: '用户数',
            icon: <User/>,
            value: data.users
        }, {
            label: '评论数',
            icon: <MessageSquareMore/>,
            value: data.users
        }, {
            label: '访问量',
            icon: <Eye/>,
            value: data.users
        }
    ]
    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                {info.map((item, index) => {
                    return (
                        <Card key={index} className="flex items-center">
                            <div className="bg-gray-100 rounded-full p-2 m-5">{item.icon}</div>
                            <div className="flex flex-col"><span
                                className="text-gray-500 text-sm">{item.label}</span><span
                                className="text-2xl">{item.value}</span>
                            </div>
                        </Card>
                    )
                })}
                <Card className="col-span-2"><div className="p-3 font-bold">快捷方式</div><Separator/>123</Card>
                <Card className="col-span-2"><div className="p-3 font-bold">通知中心</div><Separator/>123</Card>
            </div>
        </>
    )
}
export default DashboardPage;