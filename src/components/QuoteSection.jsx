import React from 'react';
import propTypes from 'prop-types';
import 'Styles/sections.scss';

const QuoteSection = ({image, children}) => {
  return (
    <div className="container-full quote__container">
      <img src={image} alt="quote-background" className={'quote__background'}/>
      <em className={'quote__text'}>
        {
          children
        }
      </em>
    </div>
  );
};

export default QuoteSection;

QuoteSection.propTypes = {
  image: propTypes.string,
  children: propTypes.any,
};
