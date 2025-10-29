import { useState } from 'react'
import viteLogo from '/vite.svg'
import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import QuoteBanner from './QuoteBanner.jsx';
import ExperienceSection from './ExperienceSection.jsx';
import ServicesSection from './ServicesSection.jsx';
import Footer from './Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
          <TopBar />
          <Navbar />
          <Hero />
          <QuoteBanner />
          <ExperienceSection />
          <ServicesSection />
          <Footer />
        
         
        </div>
      )
}

export default App