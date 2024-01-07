"use client";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from 'next/link'
import { AlignJustify,Lightbulb,Search } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { useState,useEffect } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import React from "react";
const Header = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsTop(scrollTop === 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { setTheme } = useTheme()
    const toggleDarkMode = () => {
        setTheme(isDarkMode ? 'light' : 'dark')
        setIsDarkMode(!isDarkMode);
        
    };
    const [open, setOpen] = React.useState(false)
 
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen((open) => !open)
        }
      }
      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [])
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
    ];
    return (
        <header>
            <Sheet>
            <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {/* <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup> */}
      </CommandList>
    </CommandDialog>
            <div className={`w-full px-10 mx-auto shadow-lg fixed left-0 backdrop-blur bg-white/90 ${isTop ? ' dark:bg-black' : 'dark:bg-slate-900/10' } z-50`}>
                    <div className="flex justify-between items-center h-[4rem]">
                        <div className="flex flex-row gap-4">
                            <div className="flex items-center">
                                <Link href="/">
                                    <h1 className="text-[#007bff] font-bold text-2xl my-auto">StepbyStep</h1></Link>
                            </div>
                            <div className="flex items-center max-[1200px]:hidden">
                                {menu.map((item, index) => {
                                    return (
                                        <div className="mr-4" key={index}>
                                            <a href={item.url} className="text-gray-500 hover:text-gray-900">{item.name}</a>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div onClick={toggleDarkMode} className={`${isDarkMode ? 'light' : 'dark'} cursor-pointer rounded-full dark:bg-transparent p-2 hover:bg-gray-100 dark:hover:bg-black`}>
                            <Lightbulb />
                            </div> 
                            <div onClick={()=>setOpen(true)} className={`${isDarkMode ? 'light' : 'dark'} cursor-pointer rounded-full dark:bg-transparent p-2 hover:bg-gray-100 dark:hover:bg-black`}>
                            <Search />
                            </div>
                            <SheetTrigger asChild>
                                <div className="min-[1200px]:hidden rounded-full cursor-pointer  hover:bg-gray-100 dark:hover:bg-black p-2">

                                    <AlignJustify />
                                </div>
                            </SheetTrigger>
                            <Avatar>
                                <AvatarImage src="/avatar.jpeg" alt="@shadcn" />
                                <AvatarFallback>头像</AvatarFallback>
                            </Avatar>
                        </div>
                    </div>
                </div>

                <SheetContent side="left">
                    <div className="flex flex-col gap-4 py-4">
                        {menu.map((item, index) => {
                            return (
                                <div className="flex flex-col justify-center" key={index}>
                                    <Link href={item.url}>
                                        <div className="hover:text-blue-600 bg-gray-200 rounded-lg p-3">{item.name}</div>
                                    </Link>
                                </div>
                            )
                        })
                        }
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    )
}
export default Header;
