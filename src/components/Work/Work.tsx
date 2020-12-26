import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectDetail from '../ProjectDetail';

const Work: React.FC = () => {
  const { work } = useContext(PortfolioContext);

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
    <section id="work">
      <Container>
        <div className="work-wrapper">
          <Title title="Works" />
          <Row>
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={1000}
              delay={500}
              distance="30px"
            >
              <div className="work-wrapper__text">
                <h3 className="work-wrapper__text-title">事業概要</h3>
                <div>
                  <p>
                    石川県金沢市を拠点に、Webアプリ、モバイルアプリ等の受託開発を行っております。
                  </p>
                  <p className="mb-4">
                    LaravelやGinなどのフレームワークを用いたWebアプリの制作・保守、iOSアプリケーションの開発などをお手伝いします。
                  </p>
                </div>
              </div>
            </Fade>
          </Row>
          <div className="work-wrapper__text">
            <h3 className="work-wrapper__text-title">
              <Fade
                left={isDesktop}
                bottom={isMobile}
                duration={1000}
                delay={500}
                distance="30px"
              >
              過去のお仕事
              </Fade>
            </h3>
            {work.map((w) => {
              const { title, info, info2, url, repo, img, id } = w;

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
        </div>
      </Container>
    </section>
  );
};

export default Work;
