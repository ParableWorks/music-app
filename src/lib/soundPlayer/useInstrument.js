/**
 * abstracts out some logic in instrument
 * this might be super unnecessary and a waste of time
 * but i feel like it is good
 */
const useInstrument = (instrument) => {
  const loading = instrument === undefined;

  // instrument.play but with check for loading
  const playNote = (...args) => {
    if (!loading) {
      return instrument.play(...args);
    }
    return undefined;
  };
  return { loading, playNote };
};

export default useInstrument;
