import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Experience from './components/experience';
import Footer from './components/footer';
import Header from './components/header';
import Nav from './components/nav';
import Portfolio from './components/portfolio';
import Reviews from './components/reviews';
import Services from './components/services';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
