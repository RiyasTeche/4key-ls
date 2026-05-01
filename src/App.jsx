import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Universities from './pages/Universities';
import StudyAbroad from './pages/StudyAbroad';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/study-abroad" element={<StudyAbroad />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;
