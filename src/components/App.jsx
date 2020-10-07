import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, keywordsData, projectsData, workData, contactData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [projects, setProjects] = useState([]);
  const [work, setWork] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setKeywords([...keywordsData]);
    setProjects([...projectsData]);
    setWork([...workData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, keywords, projects, work, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
