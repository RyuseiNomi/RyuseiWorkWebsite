import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Row, Col } from 'react-bootstrap';
import ProjectImg from '../Image/ProjectImg';

type Props = {
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
  img: string;
  id: number;
}

const ProjectDetail: React.FC<Props> = (props) => {
  const { title, info, info2, url, repo, img, id } = props;
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
    <Row key={id}>
      <Col lg={5} sm={12}>
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="30px"
        >
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title || 'Coming soon'}</h3>
            <div>
              <p>
                {info ||
                  'This section will come soon'}
              </p>
              <p className="mb-4">{info2 || ''}</p>
            </div>
            {url && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href={url || '#!'}
              >
                Go Website
              </a>
            )}
            {repo && (
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn text-color-main"
                href={repo}
              >
                Source Code
              </a>
            )}
          </div>
        </Fade>
       </Col>
       <Col lg={7} sm={12}>
        <Fade
          right={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={1000}
          distance="30px"
        >
          <div className="project-wrapper__image">
            <a
              href={url || '#!'}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              <Tilt
                options={{
                  reverse: false,
                  max: 8,
                  perspective: 1000,
                  scale: 1,
                  speed: 300,
                  transition: true,
                  axis: null,
                  reset: true,
                  easing: 'cubic-bezier(.03,.98,.52,.99)',
                }}
              >
                <div data-tilt className="thumbnail rounded">
                  <ProjectImg alt={title} filename={img || 'no-image.png'} />
                </div>
              </Tilt>
            </a>
          </div>
        </Fade>
      </Col>
    </Row>
  );
}
export default ProjectDetail;