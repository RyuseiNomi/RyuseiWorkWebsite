import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Ryusei a work website'}</title>
        <html lang={lang || 'jp'} />
        <meta name="description" content={description || 'RyuseiのWork Website'} />
      </Helmet>
      <App />
    </>
  );
};
