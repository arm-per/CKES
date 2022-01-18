import React from 'react';
import propTypes from 'prop-types';
import 'Styles/sections.scss';
import {Link} from 'react-router-dom';

const FirstSection = ({children, icon, title}) => {
  return (
    <section className={'container'}>
      <div className={'section__icon'}>
        <img src={icon} alt={`${title}-icon`} loading={'lazy'} width="40"/>
      </div>
      <h2 className={'section__title'}>{title}</h2>
      <p className={'section__paragraph'}>
        {
          children
        }
      </p>
      <Link to={'/contact'} className="section__button">
                    I want to be called by an advisor
      </Link>
    </section>

  );
};

export default FirstSection;

FirstSection.propTypes = {
  children: propTypes.any,
  icon: propTypes.string,
  title: propTypes.string,
};
