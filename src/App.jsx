import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='w-full'>
        <Header />
      </div>
    </main>
  )
}

export default App
