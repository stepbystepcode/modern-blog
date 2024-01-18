'use client'
import { navList } from '@/components/admin/menu'
import { usePathname } from 'next/navigation'
const AdminHeader = () => {
    const pathname = usePathname()
    return (
        <div className="p-4 w-[calc(100vw-16rem)] bg-white flex gap-2">
            {navList.filter(item => item.href === pathname.toString())[0].icon}
            {navList.filter(item => item.href === pathname.toString())[0].name}
        </div>
    );
}
export default AdminHeader;