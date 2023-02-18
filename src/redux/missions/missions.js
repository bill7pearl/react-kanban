import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];
const FETCH_MISSIONS = 'spacehub/missions/FETCH_MISSIONS_ONCE';
const JOIN_MISSION = 'spacehub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spacehub/missions/LEAVE_MISSION';
const MISSIONS_API = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  FETCH_MISSIONS,
  async (post, { dispatch }) => {
    const response = await fetch(MISSIONS_API);
    const result = await response.json();
    const missions = await result.map((item) => ({
      mission_id: item.mission_id,
      mission_name: item.mission_name,
      description: item.description,
    }));
    dispatch({ type: FETCH_MISSIONS, missions });
  },
);

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
};

export default missionReducer;
