export const intervals = {
  0: 'P1',
  1: 'm2',
  2: 'M2',
  3: 'm3',
  4: 'M3',
  5: 'P4',
  6: 'TT',
  7: 'P5',
  8: 'm6',
  9: 'M6',
  10: 'm7',
  11: 'M7',
  12: 'P8',
};

const findInterval = (note1, note2) => {
  if (typeof note1 !== 'number' || typeof note2 !== 'number') {
    throw new Error(
      'findInterval unable to find interval: parameters of type Number and integers'
    );
  }
  if (note1 % 1 !== 0 || note2 % 1 !== 0) {
    throw new Error(
      'findInterval unable to find interval: parameters must be integers'
    );
  }
  if (note2 - note1 > 12) {
    throw new Error(
      'findInterval unable to find interval: interval is greater than 12 semitones'
    );
  }

  return intervals[Math.abs(note2 - note1)];
};

export default findInterval;
