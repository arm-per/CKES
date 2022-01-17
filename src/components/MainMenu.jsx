import React from 'react';
import propTypes from 'prop-types';
import 'Styles/mainmenu.scss';
import {Link} from 'react-router-dom';

const MainMenu = ({className, onClick}) => {
  const DisableMenuHandler = () => {
    setTimeout(onClick, 200);
  };

  return (
    <div className={'main-menu ' + className}>
      <ul className={'main-menu__list'}>
        <li className={'main-menu__link'}>
          <Link onClick={DisableMenuHandler}
            to={'/'}>Home</Link>
        </li>
        <li className={'main-menu__link'}>
          <Link onClick={DisableMenuHandler}
            to={'/kitchens'}>Kitchens</Link>
        </li>
        <li className={'main-menu__link'}>
          <Link onClick={DisableMenuHandler}
            to={'/air-conditioner'}>Air Conditioner</Link>
        </li>
        <li className={'main-menu__link'}>
          <Link onClick={DisableMenuHandler}
            to={'/refrigeration'}>Refrigeration</Link>
        </li>
        <li className={'main-menu__link'}>
          <Link onClick={DisableMenuHandler}
            to={'/electrical'}>Electrical</Link>
        </li>
        <li className={'main-menu__link'}>
          <Link onClick={DisableMenuHandler}
            to={'/contact'}>Contact</Link>
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
