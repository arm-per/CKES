import React from 'react';
import propTypes from 'prop-types';
import 'Styles/mainmenu.scss';
import {NavLink} from 'react-router-dom';

const MainMenu = ({className, onClick}) => {
  const DisableMenuHandler = () => {
    setTimeout(onClick, 200);
  };

  return (
    <div className={'main-menu ' + className}>
      <ul className={'main-menu__list'}>
        <li className={'main-menu__link'}>
          <NavLink onClick={DisableMenuHandler}
            to={'/'}>Home</NavLink>
        </li>
        <li className={'main-menu__link'}>
          <NavLink onClick={DisableMenuHandler}
            to={'/kitchens'}>Kitchens</NavLink>
        </li>
        <li className={'main-menu__link'}>
          <NavLink onClick={DisableMenuHandler}
            to={'/air-conditioner'}>Air Conditioner</NavLink>
        </li>
        <li className={'main-menu__link'}>
          <NavLink onClick={DisableMenuHandler}
            to={'/refrigeration'}>Refrigeration</NavLink>
        </li>
        <li className={'main-menu__link'}>
          <NavLink onClick={DisableMenuHandler}
            to={'/electrical'}>Electrical</NavLink>
        </li>
        <li className={'main-menu__link'}>
          <NavLink onClick={DisableMenuHandler}
            to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;

MainMenu.propTypes = {
  className: propTypes.string,
  onClick: propTypes.func,
};
