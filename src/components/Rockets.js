import React from 'react';
import { useSelector } from 'react-redux';
import SingleRocket from './singleRocket';

const RenderRockets = () => {

  const rockets = useSelector((state) => state.rockets.rocket);

  return (
    <div>
      {rockets && rockets.map((rocket) => (
        <SingleRocket
          image={rocket.image}
          title={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
}

export default RenderRockets;