import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import ProjectDetail from '../ProjectDetail';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Output" />
          {projects.map((project) => {
            const { title, info, info2, url, repo, img, id } = project;
            return (
              <ProjectDetail
                title={title}
                info={info}
                info2={info2}
                url={url}
                repo={repo}
                img={img}
                id={id}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
