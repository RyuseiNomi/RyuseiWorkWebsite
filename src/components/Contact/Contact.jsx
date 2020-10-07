import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="social-links">
              <a href="https://twitter.com/skn_ton10_v1">
                <TwitterIcon style={{ fontSize: 40 }} />
              </a>
              <a href="https://github.com/RyuseiNomi">
                <GitHubIcon style={{ fontSize: 40 }} />
              </a>
            </div>
            <p className="contact-wrapper__text">
              <MailIcon style={{ fontSize: 32 }} />
              {email || 'Unknown'}
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
