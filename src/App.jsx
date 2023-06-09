
import NavBar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Testimonials from './sections/testimonials/Testimonials';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatinNav from './sections/floating-nav/FloatinNav';

const App = () => {
  return (
    <main>
        <NavBar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Testimonials/>
        <FAQs/>
        <Contact/>
        <Footer/>
        <FloatinNav/>
    </main>
  ) 
}

export default App