import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Heading from '../components/Heading'
import SessionCard from '../components/card/SessionCard'

export default () => {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Topbar />
        <div className='p-[25px]'>
          <Header />
          <Heading />
          <p className='text-[13px] leading-[15.23px] text-center mt-5'>January 2024</p>
          <SessionCard/>
          <SessionCard/>
          <SessionCard/>
          <SessionCard/>
          <SessionCard/>
        </div>
      </div>
    </main>
  )
}
