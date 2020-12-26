import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectDetail from '../ProjectDetail';

const Projects: React.FC = () => {
  const { projects } = useContext(PortfolioContext);

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
