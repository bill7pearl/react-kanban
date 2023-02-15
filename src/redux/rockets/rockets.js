import { createAsyncThunk } from '@reduxjs/toolkit';

const ROCKETS_API = 'https://api.spacexdata.com/v4/rockets';
const FETCH_ROCKETS = 'FETCH_ROCKETS';
const initialState = { rocket:[] }

export const getRockets = async () => {
  const response = await fetch(ROCKETS_API);
  const data = await response.json();
  const rockets = data.map((item) => ({
    id: item.rocket_id,
    name: item.rocket_name,
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

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, rocket: action.payload };
    default:
      return state;
  }
};

export default rocketReducer;