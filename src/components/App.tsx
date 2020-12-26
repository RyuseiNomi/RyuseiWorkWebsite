import React, { useState, useEffect } from 'react';
import Top from './Top/Top';
import About from './About/About';
import Projects from './Projects/Projects';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { topData, aboutData, keywordsData, projectsData, workData, contactData, footerData } from '../mock/data';

function App() {
  const [top, setTop] = useState({});
  const [about, setAbout] = useState({});
  const [keywords, setKeywords] = useState([]);
  const [projects, setProjects] = useState([]);
  const [work, setWork] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setTop({ ...topData });
    setAbout({ ...aboutData });
    setKeywords([...keywordsData]);
    setProjects([...projectsData]);
    setWork([...workData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ top, about, keywords, projects, work, contact, footer }}>
      <Top />
      <About />
      <Projects />
      <Work />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
