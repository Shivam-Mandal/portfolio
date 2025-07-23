  import React from 'react';
  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './components/Home';
  import Navbar from './components/Navbar';
  import About from './components/About';
  import Skills from './components/Skills';
  import Projects from './components/Projects';
  import Education from './components/Education';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
  function App() {
    return (
      <div className="font-outfit relative w-full bg-bg-home bg-cover bg-no-repeat bg-fixed overflow-hidden text-white mb-30">
              <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-lg"></div>

        {/* <Router> */}
        <div className="relative z-10">
          <Navbar />
          <Home/>
          <About/>
          <Skills/>
          <Experience/>
          <Projects/>
          <Education/>
          <Achievements/>
          <Contact/>
        </div>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/about' element={<About/>}/>
          </Routes>
        </Router> */}
        
      </div>
    );
  }

  export default App;
