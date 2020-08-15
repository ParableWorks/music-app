import { combineReducers } from 'redux';

import playSoundReducer from '../lib/playSound/reducers';

const rootReducer = combineReducers({
  test: (state = {}) => state,
  playSound: playSoundReducer,
});

export default rootReducer;
