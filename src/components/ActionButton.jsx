import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
import arrow from 'Assets/arrow.svg';

const ActionButton = ({children}) => {
  return (
    <Link to={'/contact'} className="banner-action">
      {
        children
      }
      <img src={arrow} alt="arrow"/>
    </Link>
  );
};

export default ActionButton;

ActionButton.propTypes = {
  children: propTypes.any,
};
