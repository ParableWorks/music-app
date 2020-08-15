import { SET_LOADING } from './actions';

export default function playSoundReducer(state = {}, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}