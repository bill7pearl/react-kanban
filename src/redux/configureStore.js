import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const store = configureStore(
  {
    reducer: {
      rockets: rocketReducer,
      missions: missionReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
