import CarouselContent from "@/components/carousel";
import Image from "next/image";
import NavBar from "@/components/navbar";
import CategoriesBar from "@/components/categories";
import ArticleList from "@/components/article-list";
const Main=()=>{

    return(
        <main className="col-span-2 max-[1200px]:col-span-3 ">
            <div className="grid grid-cols-6 gap-4 w-full">
               <CarouselContent/>
               <NavBar/>
                <CategoriesBar/>
                <div className="bg-red-400 rounded-lg col-span-6">
                    <Image src="/banner.jpg" alt="banner" width={1000} height={100} />
                </div>
                <ArticleList/>
            </div>
        </main>
        )
}
export default Main;
