import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Heading from './components/Heading'

function App() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Topbar />
        <div className='p-[25px]'>
          <Header />
          <Heading />
        </div>
      </div>
    </main>
  )
}

export default App
