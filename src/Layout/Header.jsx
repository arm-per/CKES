import React, {useState} from 'react';
import LanguageSwitcher from 'Helpers/LanguageSwitcher';
import logo from 'Assets/logo.png';
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
          <img src={logo} alt="logotipo ckes"
            className="header__logo" />
          <MainMenu className={ showMenu ?'show':'' }
            onClick={ShowMenuHandler}/>
          <LanguageSwitcher className={'header__switch'}/>
        </nav>
      </header>
    </>
  );
};

export default Header;
