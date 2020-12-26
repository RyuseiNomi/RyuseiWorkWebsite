import React from 'react';
import Top from './Top';
import About from './About';
import Projects from './Projects';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

import { topData, aboutData, keywordsData, projectsData, workData, contactData, footerData } from '../mock/data';

const App: React.FC = () => {
  return (
    <div className="App">
      <Top top={topData} />
      <About about={aboutData} keywords={keywordsData}/>
      <Projects projects={projectsData}/>
      <Work works={workData}/>
      <Contact contact={contactData}/>
      <Footer />
    </div>
  );
}

export default App;
