import React from 'react';

const Image = ({ src, description }) => {
  return <img className="image" src={src} alt={description} loading="lazy" />;
};

export default Image;
