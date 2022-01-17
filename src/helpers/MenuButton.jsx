import React from 'react';
import propTypes from 'prop-types';

const MenuButton = ({onClick, className}) => {
  const activeHandler = () => {
    onClick();
  };

  return (
    <button onClick={activeHandler} className={`menu-btn ${className}`}>

    </button>
  );
};

export default MenuButton;

MenuButton.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
};

