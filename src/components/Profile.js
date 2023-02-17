import React from 'react';
import { useSelector } from 'react-redux';

export const MissionsProfile = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <main className="mission-table">
      <h2>My Missions</h2>
      <table>
        <tbody>
          {missions && missions
            .filter((obj) => obj.reserved)
            .map((item) => (
              <tr key={item.mission_id}>
                <td>{item.mission_name}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </main>
  );
};

export const RocketsProfile = () => {
  const rockets = useSelector((state) => state.rockets.rocket);
  const reservedRocket = Array.isArray(rockets) ? rockets.filter((rocket) => rocket.reserved) : [];

  return (
    <main>
      <h2>My Rockets</h2>
      <table>
        <tbody>
          {
              reservedRocket.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.name}</td>
                </tr>
              ))
  }
        </tbody>
      </table>
    </main>
  );
};
