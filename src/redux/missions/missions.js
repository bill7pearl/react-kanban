import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

const initialState = [];
const FETCH_MISSION = 'REACT-KANBAN/Missions/FETCH_MISSION';
const JOIN_MISSION = 'REACT-KANBAN/Missions/JOIN_MISSION';

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_MISSION}/fulfilled`:
      return action.payload.data;
    case JOIN_MISSION:
      return state.map((mission) => (mission.id === action.payload
        ? { ...mission, joinmission: !mission.joinmission }
        : mission
      ));
    default:
      return state;
  }
};

export const fetchMission = createAsyncThunk(FETCH_MISSION, async () => {
  const response = fetch(url);
  const data = await response.json();
  const missions = [];
  data.forEach((mission) => {
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      reserved: false,
    });
  });
  return (data);
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export default missionsReducer;
