import Aside from '../../../components/aside'
import {getPost} from "@/app/util";
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
interface PageProps {
    params: {
        id: string
    },
    children: React.ReactNode

}
export const revalidate = 3600
export default async function Page({
                                 params: { id },
                                 children,
                             }: PageProps) {
    const item = await getPost(id);
    return (
        <>
        <Header />
        <div className="grid grid-cols-3 py-24 p-4 mx-auto w-[100%] gap-[1rem]
      min-[576px]:max-w-[540px]
      min-[768px]:max-w-[720px]
      min-[992px]:max-w-[960px]
      min-[1200px]:max-w-[1140px]
      min-[1400px]:max-w-[1320px]">
            {children}
            <Aside/>
        </div>
    <Footer />
    </>
    )
}
