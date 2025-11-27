import { useState, useEffect } from 'react';
import '../styles/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav>
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer' }}>
          SongYunBin
        </h1>
        <ul>
          <li><button onClick={() => scrollToSection('about')}>About</button></li>
          <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
          <li><button onClick={() => scrollToSection('resume')}>Resume</button></li>
          <li><button onClick={() => scrollToSection('portfolio')}>Portfolio</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>

          <li>
            <button onClick={handlePrint} className="print-button">
              인쇄 / PDF 저장
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
