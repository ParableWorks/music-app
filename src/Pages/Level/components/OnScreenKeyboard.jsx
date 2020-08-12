import React, { useEffect, useState } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import Soundfont from 'soundfont-player';

const OnScreenKeyboard = () => {
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote,
    lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });
  const [loading, setLoading] = useState(true);
  const [instrument, setInstrument] = useState();

  useEffect(() => {
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then((piano) => {
      setInstrument(piano);
      setLoading(false);
    });
  }, []);

  return (
    <Piano
      disabled={loading}
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        instrument.play(midiNumber);
      }}
      stopNote={() => {
      }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
};

export default OnScreenKeyboard;