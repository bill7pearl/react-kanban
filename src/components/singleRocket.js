import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

const SingleRocket = ({
  id, title, description, image, reserved, confirmedReservation,
}) => {
  const dispatch = useDispatch();
  const reserveBtn = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <main className="single-rocket">
      <div className="rocket-img"><img className="rocket-img-size" src={image} alt={title} /></div>
      <div className="rocket-details">
        <h3>{title}</h3>
        {
          reserved
            ? (
              <p>
                <span className="reserved">{confirmedReservation}</span>
                {description}
              </p>
            )
            : (
              <p>
                <span className="reserved">{confirmedReservation}</span>
                {description}
              </p>
            )
        }
        {
          reserved
            ? <button className="cancel-btn" type="button" onClick={reserveBtn}>Cancel Reservation</button>
            : <button className="reserve-btn" type="button" onClick={reserveBtn}>Reserve Rocket</button>
        }
      </div>
    </main>
  );
};

SingleRocket.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  confirmedReservation: PropTypes.string.isRequired,
};

export default SingleRocket;
