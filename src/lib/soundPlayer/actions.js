export const SET_INSTRUMENT = 'SET_INSTRUMENT';

export function setInstrument(instrument) {
  return {
    type: SET_INSTRUMENT,
    payload: instrument,
  };
}
