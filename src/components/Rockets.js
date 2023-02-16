import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleRocket from './singleRocket';
import { fetchRockets } from '../redux/rockets/rockets';

const RenderRockets = () => {
  const rockets = useSelector((state) => state.rockets.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="rockets-container">
      {rockets && rockets.map((rocket) => (
        <SingleRocket
          image={rocket.image}
          title={rocket.name}
          description={rocket.description}
        />
      ))}
    </div>
  );
};

export default RenderRockets;
