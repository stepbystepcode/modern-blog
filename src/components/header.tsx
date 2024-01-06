import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

const Header = () => {
    const menu = [
        {
            name: '首页',
            url: '/'
        },
        {
            name: '时间轴',
            url: '/timeline'
        },
        {
            name: '关于',
            url: '/about'
        },
    ]
    return (
        <header>
            <div className="w-full px-10 mx-auto shadow-lg fixed left-0 bg-white z-50">
                <div className="flex justify-between items-center h-[4rem]">
                    <div className="flex flex-row gap-4">
                        <div className="flex items-center">
                            <h1 className="font-bold text-2xl">StepbyStep</h1>
                        </div>
                        <div className="flex items-center">
                            {menu.map((item, index) => {
                                return (
                                    <div className="mr-4" key={index}>
                                        <a href={item.url} className="text-gray-500 hover:text-gray-900">{item.name}</a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Avatar>
                            <AvatarImage src="/avatar.jpeg" alt="@shadcn"/>
                            <AvatarFallback>头像</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
