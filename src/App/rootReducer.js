import { combineReducers } from 'redux';

import soundPlayerReducer from '../lib/soundPlayer/reducers';

const rootReducer = combineReducers({
  test: (state = {}) => state,
  soundPlayer: soundPlayerReducer,
});

export default rootReducer;
