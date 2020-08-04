const intervals = [
  "P1",
  "m2",
  "M2",
  "m3",
  "M3",
  "P4",
  "TT",
  "P5",
  "m6",
  "M6",
  "m7",
  "M7",
  "P8",
];

const findInterval = (note1, note2) => {
  if (typeof note1 !== "number" || typeof note2 !== "number") {
    return "findInterval unable to find interval: parameters of type Number and integers";
  }
  if (((note1 % 1) !== 0) || ((note2 % 1) !== 0)) {
    return "findInterval unable to find interval: parameters must be integers";
  }
  if ((note2 - note1) > 12) {
    return "findInterval unable to find interval: interval is greater than 12 semitones";
  }

  return intervals[Math.abs(note2 - note1)];
};

export default findInterval;
