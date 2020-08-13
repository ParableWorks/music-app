import React, { useState, useEffect } from 'react';

import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';

const MIDILevel = () => {
  const [redNotes, setRedNotes] = useState([]);
  const [greenNotes, setGreenNotes] = useState(["c/4", "f/5"]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (redNotes.length === 0) {
        setRedNotes(["c/4", "c/5"]);
      } else {
        setRedNotes([]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [redNotes]);
  return (
    <div>
      this is a midi level
      <br />
      {redNotes.toString()}
      <br />
      <SheetMusic notes={["c/4", "e/4", "g/4"]} redNotes={redNotes} greenNotes={greenNotes} />
      <OnScreenKeyboard />
    </div>
  );
};

export default MIDILevel;
