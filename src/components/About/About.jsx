import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip';
import ComputerIcon from '@material-ui/icons/Computer';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import QiitaIcon from '../../images/favicon.png';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { keywords } = useContext(PortfolioContext);
  const { img, name, subTitle, paragraphOne, paragraphTwo, paragraphThree, qiita, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  /*
   * Keyword表示用のChip向けStyle
   * https://material-ui.com/components/chips/#chip
   */
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1.0),
        padding: theme.spacing(1.0),
        fontSize: '1.5rem',
      },
    },
  }));
  const keywordChipStyle = useStyles();

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text--name">
                  {name || 'Ryusei Nomi'}
                </p>
                <p className="about-wrapper__info-text--subTitle">
                  {subTitle || 'Non subtitle'}
                </p>
                <div className="social-links">
                  <a href="https://twitter.com/skn_ton10_v1">
                    <TwitterIcon style={{ fontSize: 40 }} />
                  </a>
                  <a href="https://github.com/RyuseiNomi">
                    <GitHubIcon style={{ fontSize: 40 }} />
                  </a>
                  <a href="https://qiita.com/27ma4_ryusei">
                    <img src={QiitaIcon} alt="Logo" width="40" height="40" />
                  </a>
                </div>
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'No Description'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'No Description'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'No Description'}
                </p>
                <div className={keywordChipStyle.root}>
                  {keywords.map((keyword) => {
                    const { name, isHobby } = keyword;
                    if (!isHobby) {
                      return (
                        <Chip icon={<ComputerIcon />} label={name} />
                      );
                    }
                    return (
                      <Chip label={name} />
                    );
                  })}
                </div>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
