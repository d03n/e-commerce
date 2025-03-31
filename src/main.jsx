import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProductList from './pages/ProductList.jsx'
import ProductDetail from './components/ProductDetail.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='productList' element={<ProductList/>}>
            <Route path=':prodId' element={<ProductDetail/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
