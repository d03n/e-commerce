import Header from "./components/Header"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <div className="h-screen">
      <Header></Header>
        <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
