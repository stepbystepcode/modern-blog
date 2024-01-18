import DashboardPage from './page/dashboard'
import PostsPage from './page/posts'
import PagesPage from './page/pages'
import CommentsPage from './page/comments'
import FilesPage from './page/files'
import PhotosPage from './page/photos'
import LinksPage from './page/links'
import MomentsPage from './page/moments'
import DocsPage from './page/docs'
import ThemesPage from './page/themes'
import MenusPage from './page/menus'
import PluginsPage from './page/plugin'
import UsersPage from './page/users'
import SettingsPage from './page/settings'
import InfoPage from './page/info'
import { GaugeCircle, StickyNote, BookText, MessageCircleMore, File, Image, Link as LinkIcon, Clock, FileText, Palette, Menu, Plug, User, Settings, Info } from 'lucide-react'
    export const navList = [
        {
            name: "仪表盘",
            href: "/console/dashboard",
            icon: <GaugeCircle />,
            content: <DashboardPage />
        },
        {
            name: "文章",
            href: "/console/posts",
            icon: <FileText />,
            content: <PostsPage />
        },
        {
            name: "页面",
            href: "/console/pages",
            icon: <StickyNote />,
            content: <PagesPage />
        },
        {
            name: "评论",
            href: "/console/comments",
            icon: <MessageCircleMore />,
            content: <CommentsPage />
        },
        {
            name: "文件",
            href: "/console/files",
            icon: <File />,
            content: <FilesPage />
        },
        {
            name: "图库",
            href: "/console/photos",
            icon: <Image />,
            content: <PhotosPage />
        },
        {
            name: "链接",
            href: "/console/link",
            icon: <LinkIcon />,
            content: <LinksPage />
        },
        {
            name: "瞬间",
            href: "/console/moments",
            icon: <Clock />,
            content: <MomentsPage />
        },
        {
            name: "文档",
            href: "/console/docs",
            icon: <BookText />,
            content: <DocsPage />
        },
        {
            name: "主题",
            href: "/console/themes",
            icon: <Palette />,
            content: <ThemesPage />
        },
        {
            name: "菜单",
            href: "/console/menu",
            icon: <Menu />,
            content: <MenusPage />
        },{
            name:"插件",
            href:"/console/plugins",
            icon:<Plug />,
            content:<PluginsPage />
        },{
            name:"用户",
            href:"/console/users",
            icon:<User />,
            content:<UsersPage />

        },{
            name:"设置",
            href:"/console/settings",
            icon:<Settings />,
            content:<SettingsPage />
        },{
            name:"环境",
            href:"/console/info",
            icon:<Info />,
            content:<InfoPage />
        }
    ];