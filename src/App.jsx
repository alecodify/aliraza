import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home, Projects, Resume } from './screens';
import { Footer, Navbar, Preloader, ScrollToTop } from './components';
import './App.css'

function App() {
  const [load, setUpdateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setUpdateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  },[]);

  return (
      <Router>
          <Preloader load={load} />
          
          <div className='' id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/project' element={<Projects />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='*' element={<Home />} />
            </Routes>
          </div>

          <Footer />
      </Router> 
  )
}

export default App
