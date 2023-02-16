import { createAsyncThunk } from '@reduxjs/toolkit';

const MISSIONS_API = 'https://api.spacexdata.com/v3/missions';
const FETCH_MISSIONS = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
const initialState = { mission: [] };

export const getMissions = async () => {
  const response = await fetch(MISSIONS_API);
  const data = await response.json();
  const missions = data.map((item) => ({
    mission_id: item.mission_id,
    mission_name: item.mission_name,
    description: item.description,
  }));
  return missions;
};

export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (post, thunkAPI) => {
    const payload = await getMissions();
    thunkAPI.dispatch({ type: FETCH_MISSIONS, payload });
  },
);

/* export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (post, { dispatch }) => {
    const response = await fetch(MISSIONS_API);
    const jsonResult = await response.json();
    const missions = await jsonResult.map((item) => ({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    }));
    dispatch({ type: FETCH_MISSIONS, missions });
  },
); */

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return { ...state, mission: action.payload };
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    default:
      return state;
  }
};

/* const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.missions;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    default: return state;
  }
}; */

export default missionReducer;
