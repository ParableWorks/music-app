import React, { useEffect, useState } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import Soundfont from 'soundfont-player';

const Test = () => {
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
    Soundfont.instrument(ac, 'clavinet').then((clavinet) => {
      setInstrument(clavinet);
      setLoading(false);
    });
  }, []);

  return (
    <Piano
      disabled={loading}
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        // instrument.play('C4');
        // instrument.resolve((clavinet) => {
        //   clavinet.play('C4');
        // });
        instrument.play(midiNumber);
        // playNote();
        // Play a given note - see notes below
      }}
      // stopNote={(midiNumber) => {
      //   // Stop playing a given note - see notes below
      // }}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
};

export default Test;
