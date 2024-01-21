import AdminAside from '@/components/admin/aside'
import AdminHeader from '@/components/admin/header'

interface PageProps {
    params: {
        id: string
    },
    children: React.ReactNode

}
const Admin = (
    {
        params: { id },
        children,
    }: PageProps
) => {
    return (
        <div className='h-screen flex bg-[#eff4f9]'>
            <AdminAside />
            <div>
                <AdminHeader />
                {children}
            </div>
        </div>
    );
}
export default Admin;