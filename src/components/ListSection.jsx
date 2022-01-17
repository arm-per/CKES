import React from 'react';
import propTypes from 'prop-types';
import 'Styles/sections.scss';

const ListSection = ({icon, title, listItems}) => {
  return (
    <section className={'container'}>
      <div className={'section__icon'}>
        <img src={icon} alt={`${title}-icon`}/>
      </div>
      <h2 className={'section__title'}>{title}</h2>
      <ul className="section__list">
        {
          listItems.map((item, index) => {
            return <li key={index} className={'section__list-item'}>{item}</li>;
          })
        }
      </ul>
    </section>

  );
};

export default ListSection;

ListSection.propTypes = {
  icon: propTypes.string,
  title: propTypes.string,
  listItems: propTypes.array,
};
