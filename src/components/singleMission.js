import React from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { joinMission, leaveMission } from '../redux/missions/missions';

// eslint-disable-next-line react/prop-types
const SingleMission = ({ id, missionName, missionDesc }) => (
  <div id={id}>
    <h2 className="missionName">{missionName}</h2>
    <p className="missionDesc">{missionDesc}</p>
  </div>
);
/* SingleMission.propTypes = {
  id: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  missionDesc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
}; */

export default SingleMission;
