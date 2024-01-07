"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import { Twitter, Mail, Github, MessagesSquare, Smartphone } from "lucide-react";
import SvgComponent from "@/components/bilibili";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
const Footer = () => {
    const links = [
        {
            title: "首页",
            url: "/",
        }, {
            title: "人工智能",
            url: "/ai",
        }, {
            title: "时间轴",
            url: "/timeline",
        }, {
            title: "瞬间",
            url: "/moment",
        }, {
            title: "图库",
            url: "/gallery",
        }
    ]

    const ZhiHu = () => {
        return (
            <div className="text-xl h-[20px] flex justify-center items-center">知</div>
        )
    }
    const socialLinks = [
        {
            icon: <MessagesSquare />,
            url: "/",
            showCard: true,
            card:<span>微信号：stepbystepcode</span>
        },
        {
            icon: <Github />,
            url: "https://github.com/stepbystepcode",
            showCard: false,
        },
        {
            icon: <Smartphone />,
            url: "/",
            showCard: true,
            card:<span>手机号：13027012895</span>
        },
        {
            icon: <Mail />,
            url: "/",
            showCard: true,
            card:<span>邮箱：3202146864@qq.com</span>
        }, {
            icon: <ZhiHu />,
            url: "https://www.zhihu.com/people/peter-19-23",
            showCard: false,

        }, {
            icon: <SvgComponent />,
            url: "https://space.bilibili.com/407074030",
            showCard: false,

        }, {
            icon: <Twitter />,
            url: "https://twitter.com/Peter35761296",
            showCard: false,

        }
    ]
    return (
        <footer className="bg-white dark:bg-[#242525] w-full border-t p-10">
            <div className="max-[770px]:flex-col max-[770px]:gap-5 flex justify-between items-center">
                <div className="flex h-5 items-center space-x-4 text-sm">
                    {links.map((link, index) => (
                        <div key={index}>
                            <Link href={link.url} >
                                <span className="text-gray-500  hover:text-gray-900">{link.title}</span>
                            </Link>
                            {index !== links.length - 1 && <Separator orientation="vertical" />
                            }
                        </div>
                    ))
                    }
                </div>
                <div className="flex gap-1">
                    {
                        socialLinks.map((link, index) => {
                            return (
                                <HoverCard key={index}>
                                    <HoverCardTrigger>
                                        <div
                                            onClick={() => {
                                                window.open(link.url);
                                            }}
                                            className="p-2 flex justify-center items-center cursor-pointer w-[40px] h-[40px] dark:bg-[#3d3e3e] text-gray-500 dark:hover:text-white hover:text-gray-900 rounded-full bg-gray-100"
                                        >
                                            {link.icon}
                                        </div>
                                    </HoverCardTrigger>
                                    {link.showCard && (
                                        <HoverCardContent className="flex justify-center">
                                            {link.card}
                                        </HoverCardContent>
                                    )}
                                </HoverCard>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mt-5">
                <span className="text-gray-500">© 2024 - 2025
                    All Rights Reserved.
                    Powered by </span>
                <Link href="https://nextjs.org/"><span>Next.js</span></Link>
                <span className="text-gray-500">.
                    Developed by </span>
                <Link href="https://github.com/stepbystepcode"><span>stepbystepcode</span></Link>
                <span className="text-gray-500">.</span>
            </div>
        </footer>
    )
}
export default Footer;
