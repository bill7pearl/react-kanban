import React from 'react';

const MyProfile = () => (
  <div className="profile">
    <div className="mission">
      <h2 className="top">My Missions</h2>
      <ul className="li-li">
        <li style={{ border: '1px solid grey' }}>Telstar</li>
        <li style={{ border: '1px solid grey' }}>SES</li>
        <li style={{ border: '1px solid grey' }}>Asiasat</li>
        <li style={{ border: '1px solid grey' }}>ABs</li>
      </ul>
    </div>
    <div className="rocket">
      <h2 className="top">My Rockets</h2>
      <ul className="li-li">
        <li style={{ border: '1px solid grey' }}>Falcon9</li>
        <li style={{ border: '1px solid grey' }}>Falcon Heavy</li>
        <li style={{ border: '1px solid grey' }}>star ship</li>
      </ul>
    </div>
  </div>

);

export default MyProfile;
