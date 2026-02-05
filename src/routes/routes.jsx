import { Route, Routes } from 'react-router-dom'
// import Navegation from '../components/layout/Navbar'
import "./pageWrapper.css"
import Header from '../components/layout/Header'
import Home from '../pages/Home'
import Footer from '../components/layout/Footer'
import About from '../pages/About'
import Location from '../pages/Location'
import Careers from '../pages/Careers'

export default function AppRoutes() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Location' element={<Location />}/>
        <Route path='/Careers' element={<Careers />}/>
      </Routes>
      <Footer />
    </>
  )
}