import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

type Top = {
  title: string;
  name: string;
  subtitle: string;
  cta: string;
}

type Props = {
  top: Top;
}

const Top: React.FC<Props> = (props) => {
  const { top } = props;
  const { title, name, subtitle, cta } = top;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <span className="text-color-main">{name || 'Ryusei Nomi'}</span>
            <br />
            {subtitle || "A work web site"}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <div className="hero-scroll">
              <span></span>
              Scroll
            </div>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Top;
