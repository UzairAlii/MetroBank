import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import OpenAccountSection from './components/OpenAccount'
import About from './components/About'
import Services from './components/Services'
import CreditCard from './components/creditCard'
import EMIcalculator from './components/EMI-calculator'
import MobileApp from './components/MobileApp'
import Testimonials from './components/Testimonials'
import MediaUpdate from './components/MediaUpdate'
import Footer from './components/Footer'
import Contact from './components/contact'
import './App.css'

function App() {

  return (
      <div className='container'>
      <Navbar/>
      <Homepage/>
      <About/>
      <OpenAccountSection/>
      <Services/>
      <CreditCard/>
      <EMIcalculator/>
      <MobileApp/>
      <Testimonials/>
      <MediaUpdate  />
      <Contact/>
      <Footer />
      </div>
  )
}

export default App
