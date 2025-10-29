import { useState } from 'react'
import viteLogo from '/vite.svg'
import TopBar from "./TopBar.jsx";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import QuoteBanner from './QuoteBanner.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (

      <div>
          <TopBar />
          <Navbar />
          <Hero />
          <QuoteBanner />
        
         
        </div>
      )
}

export default App