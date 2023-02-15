import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';


const store = configureStore(
  {
    reducer: {
      rockets: rocketReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;