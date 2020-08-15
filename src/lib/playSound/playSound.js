import Soundfont from 'soundfont-player';
import { useSelector } from 'react-redux';
import { setLoading } from './actions';
// import { store } from '../../App/App';

// const SoundPlayer = () => {
// const noteBuffer = useSelector((state) => state.noteBuffer);
// const [loading, setLoading] = useState(true);
// const [instrument, setInstrument] = useState();

// useEffect(() => {

// let instrument;
let loading = true;

const ac = new AudioContext();

let instrument;
// async function initialize() {

// store.dispatch(setLoading(true));

Soundfont.instrument(ac, 'acoustic_grand_piano').then((piano) => {
  instrument = piano;
  // store.dispatch(setLoading(false));
  loading = false;
});
// }

// export const isLoading = () => {
//   return loading;
// };

function playNote(note) {
  // if (_loading) {
  // instrument = await initialize();
  // loading = false;
  // }
  // await initialize().then(() => {

  // });
  // console.log(instrument);
  if (!loading) {
  instrument.play(note);
  }
  // }
}

export default playNote;
