import Main from '../components/main'
import Aside from '../components/aside'
import Header from '@/components/header'
import Footer from '@/components/footer'
export default function Home() {
  return (
    <>
    <Header />
      <div className="grid grid-cols-3 py-24 p-4 mx-auto w-[100%] gap-[1rem] 
      min-[576px]:max-w-[540px] 
      min-[768px]:max-w-[720px] 
      min-[992px]:max-w-[960px] 
      min-[1200px]:max-w-[1140px] 
      min-[1400px]:max-w-[1320px]">
      <Main />
      <Aside />
      </div>
      <Footer />
      </>
  )
}
