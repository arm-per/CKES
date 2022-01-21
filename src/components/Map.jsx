import React from 'react';

const Map = () => {
  const mapStyle = {
    'width': '100%',
    'height': '350px',
    'display': 'block',
    'border': 'none',
  };

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.2214738102834!2d-94.75628148464293!3d39.124191379536335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c08c93f3b63045%3A0x9d799984e671e2ea!2s1710%20N%2075%20Dr%2C%20Kansas%20City%2C%20KS%2066112%2C%20USA!5e0!3m2!1sen!2smx!4v1642547976330!5m2!1sen!2smx"
      style={mapStyle}
      title="Location" loading="lazy"/>
  );
};

export default Map;
