import React from 'react';
import propTypes from 'prop-types';
import 'Styles/sectionbanner.scss';

const SectionBanner = ({bg, children, icon}) => {
  const background = {
    'backgroundImage': `url(${bg})`,
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
  };

  return (
    <main className={'top-banner'}>
      <div className="container-full">
        <div className="top-banner__area" style={background}>
          <div className={'top-banner__screen'}>
            {
              icon && <img src={icon} alt="icon_section"
                className="top-banner__img" width="80"/>
            }
            {
              children
            }
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionBanner;

SectionBanner.propTypes = {
  bg: propTypes.string,
  children: propTypes.any,
  icon: propTypes.string,
};
