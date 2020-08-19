import Soundfont from 'soundfont-player';
import { setInstrument } from './actions';

const startSoundPlayer = (store) => {
  const ac = new AudioContext();
  console.log("store", store);
  store.dispatch(
    setInstrument(Soundfont.instrument(ac, 'acoustic_grand_piano'))
  );
};

export default startSoundPlayer;
