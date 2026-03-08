import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollNav from './components/ScrollNav';

export default function App() {
    return (
        <>
            <Navbar />
            <ScrollNav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
        </>
    );
}
