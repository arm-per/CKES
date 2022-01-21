import React from 'react';
import airIcon from 'Assets/AirConditioner-icon.svg';
import electricalIcon from 'Assets/Electrical-icon.svg';
import refrigerationIcon from 'Assets/Refrigeration-icon.svg';
import kitchenIcon from 'Assets/Kitchens-icon.svg';
import 'Styles/contact.scss';


const Icons = () => {
  return (
    <div className="icons-grid">
      <img src={refrigerationIcon} alt="refrigeration"/>
      <img src={kitchenIcon} alt="Kitchen"/>
      <img src={airIcon} alt="AirConditioner"/>
      <img src={electricalIcon} alt="Electrical"/>
    </div>
  );
};

export default Icons;
