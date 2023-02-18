import { createAsyncThunk } from '@reduxjs/toolkit';

const ROCKETS_API = 'https://api.spacexdata.com/v4/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const RESERVED_ROCKETS = 'RESERVED_ROCKETS';

const getRockets = async () => {
  const res = await fetch(ROCKETS_API);
  const results = await res.json();
  const rockets = results.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    image: item.flickr_images[0],
    reserved: false,
  }));
  return rockets;
};

export const fetchRockets = createAsyncThunk(
  FETCH_ROCKETS,
  async (post, thunkAPI) => {
    const payload = await getRockets();
    thunkAPI.dispatch({ type: FETCH_ROCKETS, payload });
  },
);

export const reserveRocket = (id) => (dispatch, getState) => {
  const state = getState().rockets.rocket;

  const reservedRockets = state.map((rocket) => {
    if (rocket.id !== id) return rocket;
    const reserved = !rocket.reserved;
    return { ...rocket, reserved };
  });
  dispatch({
    type: RESERVED_ROCKETS,
    payload: reservedRockets,
  });
};

const rocketReducer = (state = { rocket: [] }, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rocket: action.payload };
    case RESERVED_ROCKETS:
      return { ...state, rocket: action.payload };
    default:
      return state;
  }
};

export default rocketReducer;
