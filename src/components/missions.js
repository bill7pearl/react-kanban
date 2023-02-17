import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';
import SingleMission from './singleMission';

let indicator = false;
const RenderMissions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);

  useEffect(() => {
    if (!indicator) {
      dispatch(fetchMissions());
      indicator = true;
    }
  }, [dispatch]);

  return (
    <table>
      <tbody>
        <tr>
          <td>Mission</td>
          <td>Description</td>
          <td>Status</td>
          <th aria-label="member" />
        </tr>
        {missions.map((mission) => (
          <SingleMission
            key={mission.mission_id}
            id={mission.mission_id}
            title={mission.mission_name}
            description={mission.description}
            reserved={mission.reserved ? mission.reserved : false}
          />
        ))}
      </tbody>
    </table>
  );
};
export default RenderMissions;
