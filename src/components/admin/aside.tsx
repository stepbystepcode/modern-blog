'use client'
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { navList } from '@/components/admin/menu'
import { usePathname } from 'next/navigation'
const AdminAside = () => {
    const pathname = usePathname()
    return (
        <>
            <aside className="h-full bg-white w-64 border-r flex flex-col items-center p-4 gap-2">

                <Link href="/">
                    <h1 className="text-[#007bff] font-bold text-2xl my-auto">StepbyStep</h1></Link>
                <Input placeholder="Search" className='my-3' />
                <nav className="flex flex-col gap-2 w-full items-stretch">
                    {
                        navList.map((item, index) => {
                            return (
                                <Link href={item.href} key={index}>
                                <div className={`flex hover:bg-[#f3f4f6] p-1 rounded-sm ${pathname.toString()===item.href?'bg-[#f3f4f6]':''}`}>
                                    <span className='scale-75'>{item.icon}</span>
                                    <span className='ml-2'>{item.name}</span>
                                </div>
                                </Link>
                            )
                        })
                    }
                </nav>
            </aside>
        </>
    );
}
export default AdminAside;