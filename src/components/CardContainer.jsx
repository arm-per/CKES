import React from 'react';
import propTypes from 'prop-types';
import 'Styles/sections.scss';

const CardContainer = ({children, icon, title}) => {
  return (
    <section className={'container'}>
      <div className={'section__icon'}>
        <img src={icon} alt={`${title}-icon`}/>
      </div>
      <h2 className={'section__title'}>{title}</h2>
      <div className="section__card-container--grid">
        {
          children
        }
      </div>
    </section>

  );
};

export default CardContainer;

CardContainer.propTypes = {
  children: propTypes.array,
  icon: propTypes.string,
  title: propTypes.string,
};
