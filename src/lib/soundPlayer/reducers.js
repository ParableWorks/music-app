import { SET_INSTRUMENT } from './actions';

export default function playSoundReducer(state = {}, action) {
  // console.log('reducer called', action);
  switch (action.type) {
    case SET_INSTRUMENT:
      return {
        ...state,
        instrument: action.payload,
        playNote: action.payload.play,
      };
    default:
      return state;
  }
}
