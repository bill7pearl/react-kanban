import React from 'react';
import { useSelector } from 'react-redux';

export const MissionsProfile = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <main className="mission-profile">
      <h2 className="profile-titles">My Missions</h2>
      <table className="profile-table">
        <tbody>
          {missions && missions
            .filter((obj) => obj.reserved)
            .map((item) => (
              <tr className="profile-data" key={item.mission_id}>
                <td className="profile-data">{item.mission_name}</td>
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
    <main className="rocket-profile">
      <h2 className="profile-titles">My Rockets</h2>
      <table className="profile-table">
        <tbody>
          {
              reservedRocket.map((rocket) => (
                <tr className="profile-data" key={rocket.id}>
                  <td className="profile-data">{rocket.name}</td>
                </tr>
              ))
  }
        </tbody>
      </table>
    </main>
  );
};
