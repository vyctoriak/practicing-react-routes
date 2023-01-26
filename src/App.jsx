import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Product from './components/Product'
import Header from './components/Header' 
import Footer from './components/Footer'
import Contato from './components/Contato'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='practicing-react-routes/' element={<Products />} />
            <Route path='practicing-react-routes/produto/:id' element={<Product />} />
            <Route path='practicing-react-routes/contact' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
