import Soundfont from 'soundfont-player';
// import { useSelector } from 'react-redux';

// const SoundPlayer = () => {
// const noteBuffer = useSelector((state) => state.noteBuffer);
// const [loading, setLoading] = useState(true);
// const [instrument, setInstrument] = useState();

// useEffect(() => {

let instrument;
let loading = true;

const ac = new AudioContext();
Soundfont.instrument(ac, 'acoustic_grand_piano').then((piano) => {
  instrument = piano;
  loading = false;
});

export const isLoading = () => {
  return loading;
};

const playNote = (note) => {
  if (!loading) {
    instrument.play(note);
  }
};

export default playNote;
