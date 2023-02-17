import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import SingleMission from './singleMission';

// let indicator = false;
const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.mission);

  useEffect(() => {
    dispatch(fetchMissions());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <nav>
        <h4>Mission</h4>
        <h4>Description</h4>
        <h4>Status</h4>
        <button type="submit">Join Mission</button>
      </nav>
      <div>
        {missions && missions.map((mission) => (
          <SingleMission
            key={mission.mission_id}
            id={mission.mission_id}
            missionName={mission.mission_name}
            missionDesc={mission.description}
            // reserved={mission.reserved ? mission.reserved : false}
          />
        ))}
      </div>
    </main>
  );
};
export default Missions;
