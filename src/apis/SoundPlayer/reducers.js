import {
  PLAY_NOTE,
} from './actions';

export default (state = {}, action) => {
  console.log('reducer called', action.payload);
  switch (action.type) {
    case PLAY_NOTE:
      return { ...state, noteBuffer: [action.payload, ...state.noteBuffer] };
    default:
      return state;
  }
};
