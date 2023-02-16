import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMission } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.mission);
  const shouldFetchMission = useRef(true);

  useEffect(() => {
    if (shouldFetchMission.current) {
      shouldFetchMission.current = false;
      dispatch(fetchMission());
    }
  }, [dispatch]);

  return (
    <div>
      <nav>
        <h4>Mission</h4>
        <h4>Description</h4>
        <h4>Status</h4>

      </nav>
      {missions && Missions.map((mission) => (
        <Missions
          key={mission.id}
          id={mission.id}
          missionName={mission.mission}
          desc={mission.description}
          joinmission={mission.joinmission}
        />
      ))}
    </div>
  );
};
export default Missions;
