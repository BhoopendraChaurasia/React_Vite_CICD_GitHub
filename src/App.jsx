
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ContactUs from './pages/ContactUs'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<ContactUs />}></Route >
          </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
