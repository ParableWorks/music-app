import Soundfont from 'soundfont-player';
import { setLoading, setInstrument } from './actions';
// import { store } from '../../App/App';

// const SoundPlayer = () => {
// const noteBuffer = useSelector((state) => state.noteBuffer);
// const [loading, setLoading] = useState(true);
// const [instrument, setInstrument] = useState();

// useEffect(() => {

// let instrument;
// export let loading = true;

// let instrument;
// async function initialize() {

const startSoundPlayer = (store) => {
  const ac = new AudioContext();
  store.dispatch(setLoading(true));
  store.dispatch(
    setInstrument(Soundfont.instrument(ac, 'acoustic_grand_piano'))
  );
};

export default startSoundPlayer;
// .then((piano) => {
//   console.log('piano loaded')
//   // instrument = piano;
//   store.dispatch(setInstrument(piano));
//   store.dispatch(setLoading(false));
//   // loading = false;
// });
// // }

// export const isLoading = () => {
//   return loading;
// };

// function playNote(note) {
//   // if (_loading) {
//   // instrument = await initialize();
//   // loading = false;
//   // }
//   // await initialize().then(() => {

//   // });
//   // console.log(instrument);
//   instrument.play(note);
//   // }
// }

// export default playNote;
