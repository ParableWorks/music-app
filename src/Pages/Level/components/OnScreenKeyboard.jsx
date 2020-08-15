import React, { useEffect, useState } from 'react';
import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import './customPianoStyles.css'; // import a set of overrides
import { useSelector } from 'react-redux';

import playNote from '../../../lib/playSound/playSound';

const OnScreenKeyboard = () => {
  const soundPlayerLoading = useSelector((state) => {
    console.log('sate', state);
    return state.playSound.loading;
  });
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f5');
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote,
    lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  // const { loading, playNote } = useSound();

  // console.log(soundPlayerLoading);
  // console.log("loading", loading)

  return (
    <Piano
      disabled={soundPlayerLoading}
      noteRange={{ first: firstNote, last: lastNote }}
      playNote={(midiNumber) => {
        // instrument.play(midiNumber);
        // playSound(midiNumber);
        playNote(midiNumber);
      }}
      stopNote={() => {}}
      width={1000}
      keyboardShortcuts={keyboardShortcuts}
    />
  );
};

export default OnScreenKeyboard;
