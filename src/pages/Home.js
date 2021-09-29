import Hero from '../components/Hero/Hero';
import Cases from '../components/Cases/Cases';
import Clients from '../components/Clients/Clients';
import Contact from '../components/Contact/Contact';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';


const Home = props => {
  return (
    <>
      <Hero/>
      <Cases/>
      <Clients/>
      <Contact/>
      <ScrollToTop/>
    </>
  )
};

export default Home;
