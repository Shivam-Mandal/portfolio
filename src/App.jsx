  import React from 'react';
  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Home from './components/Home';
  import Navbar from './components/Navbar';
  import About from './components/About';

  function App() {
    return (
      <div className="font-outfit relative w-full bg-bg-home bg-cover bg-no-repeat bg-fixed overflow-hidden text-white mb-30">
              <div className="absolute inset-0 bg-black opacity-60 backdrop-blur-lg"></div>

        {/* <Router> */}
        <div className="relative z-10">
          <Navbar />
          <Home/>
          <About/>
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
