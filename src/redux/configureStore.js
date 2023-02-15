/* import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const store = configureStore(
  {
    reducer: {
      rockets: rocketsReducer,
    },
  },
  applyMiddleware(thunk),
);
export default store; */

import { configureStore } from '@reduxjs/toolkit';
import RocketReducer from './rockets/rockets';

export default configureStore({
    reducer: {
        rocket: RocketReducer,
    },
});