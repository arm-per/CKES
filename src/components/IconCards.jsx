import React from 'react';
import propTypes from 'prop-types';
import 'Styles/homepage.scss';

const IconCard = ({image, title, children, color}) => {
  return (
    <article className={`icon-card__container ${color}`}>
      <img src={image} alt={`icon_${title}`}
        className="icon-card__icon"/>
      <h2 className="icon-card__title">{title}</h2>
      <p className="icon-card__paragraph">{
        children
      }</p>
    </article>
  );
};

export default IconCard;

IconCard.propTypes = {
  image: propTypes.string,
  title: propTypes.string,
  children: propTypes.any,
  color: propTypes.string,
};
