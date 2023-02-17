import React from 'react';
import './rockets.css';

const SingleRocket = ({
  // eslint-disable-next-line react/prop-types
  title, description, image,
}) => (
  <div className="rockets">
    <div className="img-rocket">
      <img src={image} alt={title} />
    </div>
    <div className="desc">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default SingleRocket;
