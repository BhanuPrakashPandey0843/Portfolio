import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Movingstrip from '@/app/components/Movingstrip';
import About from '@/app/components/About';
import Skills from '@/app/components/Skills';
import Project from '@/app/components/Project';
import Education from '@/app/components/Education';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
     <Project />
      
      <Skills />
       <Movingstrip />
      
      <Education />
      <Contact />  
      <Footer />
    </>
  )
}
