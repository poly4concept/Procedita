import './App.css';
import Footer from './components/footer';
import Franchise from './components/franchise';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Partner from './components/partner';
import Testimonials from './components/testimonials';
import Why from './components/why';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Hero />
        <Why />
        <Franchise/>
        <Partner/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}
export default App;
