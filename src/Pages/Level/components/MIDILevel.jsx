import React, { useState, useEffect } from 'react';

import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';
import InstructBox from './InstructBox';

const MIDILevel = () => {
  const [redNotes, setRedNotes] = useState([]);
  const [greenNotes, setGreenNotes] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      if (redNotes.length === 0) {
        setRedNotes(['c/4', 'c/5']);
      } else {
        setRedNotes([]);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [redNotes]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (greenNotes.length === 0) {
        setGreenNotes(['c/4', 'f/5']);
      } else {
        setGreenNotes([]);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [greenNotes]);

  const content = (
    <SheetMusic
      notes={['c/4', 'e/4', 'g/4']}
      redNotes={redNotes}
      greenNotes={greenNotes}
    />
  );

  return (
    <div>
      this is a midi level
      <br />
      <InstructBox insideContent={content} />
      <OnScreenKeyboard />
    </div>
  );
};

export default MIDILevel;
