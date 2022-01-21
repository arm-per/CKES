import React from 'react';
import propTypes from 'prop-types';

const ImageBreaker = ({img, title}) => {
  return (
    <section className="container">
      <img className="imagebreaker" src={img}
        alt={`image_${title}`} loading={'lazy'}/>
    </section>
  );
};

export default ImageBreaker;

ImageBreaker.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
};
