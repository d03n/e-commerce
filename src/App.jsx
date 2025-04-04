import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="flex flex-col h-screen">
      <Header/>
        <div className=''>
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}

export default App
