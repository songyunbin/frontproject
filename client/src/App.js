import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

import ProjectRefresh from './page/ProjectRefresh';
import Mapmories from './page/Mapmories';
import Talkdoc from './page/Talkdoc';
import AiProject from './page/AiProject';

import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-active');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    document.querySelectorAll('.fade-in-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Routes>

        <Route 
          path="/" 
          element={
            <div className="App">
              <Header />
              <Intro />
              <About />
              <Skills />
              <Resume />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/portfolio/project-refresh" element={<ProjectRefresh />} />
        <Route path="/portfolio/mapmories" element={<Mapmories />} />
        <Route path="/portfolio/talkdoc" element={<Talkdoc />} />
        <Route path="/portfolio/aiproject" element={<AiProject/>} />

      </Routes>
    </Router>
  );
}

export default App;
