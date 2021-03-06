import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Reviews from './components/reviews/Reviews';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
