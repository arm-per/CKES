import React, {useState} from 'react';
import logo from 'Assets/logo.png';
import {Link} from 'react-router-dom';
import 'Styles/header.scss';
import MenuButton from 'Helpers/MenuButton';
import MainMenu from 'Components/MainMenu';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const ShowMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="header">
        <nav className="header__nav container">
          <MenuButton onClick={ShowMenuHandler}
            className={showMenu?'active':''}/>
          <Link to={'/'} className="header__nav-logolink">
            <img src={logo} alt="logotipo ckes"
              className="header__logo" width="120"/>
          </Link>
          <MainMenu className={ showMenu ?'show':'' }
            onClick={ShowMenuHandler}/>
        </nav>
      </header>
    </>
  );
};

export default Header;
