import React from 'react';

const SingleRocket = ({
  /* eslint-disable react/prop-types */
  title, description, image,
}) => {
  
  return (
    <div className='rockets'>
        <div>
         <img src={image} alt={title} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
    </div>
  );
};

export default SingleRocket;