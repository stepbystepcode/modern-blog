import Main from '../components/main'
import Aside from '../components/aside'
import Footer from '../components/footer'

export default function Home() {
  return (
      <div className="grid grid-cols-3 py-24 px-16 gap-[1rem]">
      <Main />
      <Aside />
      </div>
  )
}
