import React from 'react';
import { useSelector } from 'react-redux';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import './customPianoStyles.css'; // import a set of overrides

const OnScreenKeyboard = () => {
  const instrument = useSelector((state) => state.soundPlayer.instrument);
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote,
    lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  return (
    <Piano
      disabled={instrument === undefined}
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        instrument.play(midiNumber);
      }}
      stopNote={() => {}}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
};

export default OnScreenKeyboard;
