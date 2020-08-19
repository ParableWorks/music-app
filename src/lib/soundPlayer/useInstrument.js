const useInstrument = (instrument) => {
  const loading = instrument === undefined;
  const playNote = (...args) => {
    if (!loading) {
      instrument.play(...args);
    }
  };
  return { loading, playNote };
};

export default useInstrument;
