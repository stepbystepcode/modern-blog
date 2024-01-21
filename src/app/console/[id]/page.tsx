import { navList } from '@/components/admin/menu'
export default async function AdminContent({params: { id },}: { params: { id: string } }) {
    return (
        <div className="m-4">
        {navList.filter(item => item.href.split('/').pop() === id)[0].content}
        </div>
    )
}