import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Produtos from './components/Produtos'
import Header from './components/Header' 
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className='content'>
        <Routes>
          <Route path='/' element={<Produtos />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
