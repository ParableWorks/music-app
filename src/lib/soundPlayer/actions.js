export const SET_LOADING = 'SET_LOADING';
export const SET_INSTRUMENT = 'SET_INSTRUMENT';

export function setLoading(loading) {
  return {
    type: SET_LOADING,
    payload: loading,
  };
}

export function setInstrument(instrument) {
  return {
    type: SET_INSTRUMENT,
    payload: instrument,
  };
}
