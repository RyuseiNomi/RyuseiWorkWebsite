import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import PortfolioContext from '../../context/context';
import Title from '../Title';

const Contact: React.FC = () => {
  const { contact } = useContext(PortfolioContext);
  const { email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
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
