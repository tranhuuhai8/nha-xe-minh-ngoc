import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import PriceTable from '../components/PriceTable'
import Advantages from '../components/Advantages'
import BookingForm from '../components/BookingForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <PriceTable />
      <Advantages />
      <BookingForm />
      <Footer />
    </>
  )
}
