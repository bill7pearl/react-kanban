import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const RenderRockets = ({
   title, description, img,
}) => {

  const rockets = useSelector((state) => state.rocket);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
       {rockets.map((item) => (
        <main>
        <h2>{title=item.name}</h2>
        <p>{description=item.description}</p>
        <img src={img=item.image} alt="" />
        </main>
       ))}
    </>
  );
}

export default RenderRockets;