import React from 'react';
import propTypes from 'prop-types';
import 'Styles/sections.scss';
import {Link} from 'react-router-dom';

const SolutionCard = ({title, image, description}) => {
  return (
    <article className="section__card">
      <div className="section__card-container">
        <div className="section__card-image">
          <img src={image} alt={`${title}-img`} width="90"/>
        </div>
        <div className="section__card-text">
          <h3 className="section__card-title">{title}</h3>
          <p className="section__card-paragraph">
            {
              description
            }
          </p>
          <Link className="section__card-button" to={'/'}>Ask for this</Link>
        </div>
      </div>
    </article>
  );
};

export default SolutionCard;

SolutionCard.propTypes = {
  title: propTypes.string,
  image: propTypes.string,
  description: propTypes.string,
};
