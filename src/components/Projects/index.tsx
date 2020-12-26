import React from 'react';
import { Container } from 'react-bootstrap';
import Title from '../Title';
import ProjectDetail from '../ProjectDetail';

type Project = {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
}

type Props = {
  projects: Project[];
}

const Projects: React.FC<Props> = (props) => {
  const { projects } = props;

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Output" />
          {projects.map((project) => {
            const { id, img, title, info, info2, url, repo } = project;
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
