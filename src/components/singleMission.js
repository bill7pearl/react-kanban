import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';

const SingleMission = (props) => {
  const {
    id, title, description, reserved,
  } = props;
  const dispatch = useDispatch();

  const joinBtn = (e) => {
    if (!reserved) {
      dispatch(joinMission(e.target.parentNode.parentNode.id));
      return;
    }

    dispatch(leaveMission(e.target.parentNode.parentNode.id));
  };

  return (
    <tr id={id}>
      <td className="missions-header">{title}</td>
      <td>{description}</td>
      <td>
        { reserved ? <button type="button" className="active-member">Active Member</button> : <button type="button" className="not-member">NOT A MEMBER </button> }
      </td>
      <td>
        { reserved ? <button type="button" className="leave-mission" onClick={joinBtn}>Leave Mission</button> : <button type="button" className="join-mission" onClick={joinBtn}>Join Mission</button> }
      </td>
    </tr>
  );
};

SingleMission.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default SingleMission;
