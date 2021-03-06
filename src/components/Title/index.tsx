import React from 'react';
import Fade from 'react-reveal/Fade';

type Props = {
  title: string;
}

const Title: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <Fade bottom duration={1000} delay={300} distance="0px">
      <h2 className="section-title">{title}</h2>
    </Fade>
  );
};

export default Title;
