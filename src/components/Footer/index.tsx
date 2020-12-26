import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

type Footer = {
  networks: {
    id: string;
    name: string;
    url: string;
  }[];
}

const Footer: React.FC = () => {

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} Ryusei Nomi - Template developed by{' '}
          <a href="https://github.com/cobidev" target="_blank" rel="noopener noreferrer">
            Jacobo Martínez
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
