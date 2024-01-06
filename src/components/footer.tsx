import Link from "next/link";
import { Separator } from "@/components/ui/separator"
import {Twitter, Mail, Github, MessagesSquare, Smartphone} from "lucide-react";
import BiliBiliIcon from "../../public/bilibili.svg";
import Image from "next/image";
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
    const BiliBili=()=>{
        return(
            <Image width={5} height={5} src={BiliBiliIcon} alt="bilibili" className="w-6 h-6 text-gray-500"/>
        )
    }

    const ZhiHu=()=>{
        return(
            <div className="text-xl h-[20px] flex justify-center items-center">知</div>
        )
    }
    const socialLinks = [
        {
            icon: <MessagesSquare />,
            url: "/",
        },
        {
            icon: <Github />,
            url: "https://github.com/stepbystepcode",
        },
        {
            icon: <Smartphone />,
            url: "/",
        },
        {
            icon: <Mail />,
            url: "/",
        }, {
            icon: <ZhiHu/>,
            url: "/",
        }, {
            icon: <BiliBili/>,
            url: "/"
        }, {
            icon: <Twitter />,
            url: "/",
        }
    ]
    return (
        <footer className="bg-white w-full border-t p-10">
            <div className="max-[770px]:flex-col max-[770px]:gap-5 flex justify-between items-center">
                <div  className="flex h-5 items-center space-x-4 text-sm">
                    {links.map((link, index) => (
                        <>
                            <Link href={link.url} key={index}>
                                <span className="text-gray-500 hover:text-gray-900">{link.title}</span>
                            </Link>
                            {index !== links.length - 1 && <Separator  orientation="vertical" />
                            }
                        </>
                    ))
                    }
                </div>
                <div className="flex gap-1">
                    {
                        socialLinks.map((link, index) => (
                            <Link href={link.url} key={index}>
                                <div className="p-2 flex justify-center items-center w-[40px] h-[40px] text-gray-500 hover:text-gray-900 rounded-full bg-gray-100">{link.icon}</div>
                            </Link>
                        ))
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
