import Soundfont from 'soundfont-player';
import { setLoading, setInstrument } from './actions';

const startSoundPlayer = (store) => {
  const ac = new AudioContext();
  store.dispatch(setLoading(true));
  store.dispatch(
    setInstrument(Soundfont.instrument(ac, 'acoustic_grand_piano'))
  );
};

export default startSoundPlayer;
