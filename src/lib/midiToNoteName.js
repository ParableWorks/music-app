export const notes = {
  0: 'C',
  1: 'C#',
  2: 'D',
  3: 'Eb',
  4: 'E',
  5: 'F',
  6: 'F#',
  7: 'G',
  8: 'G#',
  9: 'A',
  10: 'Bb',
  11: 'B',
};

const midiToNoteName = (midiNumber) => {
  if (typeof midiNumber !== 'number') {
    throw new Error(
      `midiToNoteName takes a number instead received ${midiNumber}`
    );
  }
  if (midiNumber < 0 || midiNumber > 127) {
    throw new Error(
      `midiToNoteName takes a number in the midi range  0 <= midiNumber <= 127 instead received ${midiNumber}`
    );
  }
  return notes[midiNumber % 12];
};

export default midiToNoteName;
