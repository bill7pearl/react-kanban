import { createSlice } from '@reduxjs/toolkit';

const ROCKETS_API = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = async () => {
  const response = await fetch(ROCKETS_API);
  const data = await response.json();
  const rockets = data.map((item) => ({
    id: item.rocket_id,
    name: item.rocket_name,
    description: item.description,
    image: item.flickr_images[0],
  }));
  return rockets;
};


const rocketsSlice = createSlice(({
    name: "rockets",
    initialState: {
        rockets: [],
    },
}));

export default rocketsSlice.reducer;