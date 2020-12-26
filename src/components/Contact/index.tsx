import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import MailIcon from '@material-ui/icons/Mail';
import Title from '../Title';

type Contact = {
  email: string;
}

type Props = {
  contact: Contact;
}

const Contact: React.FC<Props> = (props) => {
  const { contact } = props;

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              <MailIcon style={{ fontSize: 32 }} />
              {contact.email || 'Unknown'}
            </p>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
