import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleRocket from './singleRocket';
import { fetchRockets } from '../redux/rockets/rockets';

const RenderRockets = () => {
  const rockets = useSelector((state) => state.rockets.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <main className="rockets-container">
      {rockets && rockets.map((rocket) => (
        <SingleRocket
          key={rocket.id}
          image={rocket.image}
          title={rocket.name}
          id={rocket.id}
          description={rocket.description}
          reserved={rocket.reserved}
          confirmedReservation={rocket.reserved ? 'Reserved' : ''}
        />
      ))}
    </main>
  );
};

export default RenderRockets;
