import { navList } from '@/components/admin/menu'
export default async function AdminContent({params: { id },}: { params: { id: string } }) {
    return (
        <>
        {navList.filter(item => item.href === id).toString()}
        </>
    )
}