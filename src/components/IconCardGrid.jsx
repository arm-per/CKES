import React from 'react';
import propTypes, {element} from 'prop-types';
import 'Styles/homepage.scss';

const IconCardGrid = ({children}) => {
  return (
    <section className="icon-card__grid">
      {
        children
      }
    </section>
  );
};

export default IconCardGrid;

IconCardGrid.propTypes = {
  children: propTypes.arrayOf(element),
};
