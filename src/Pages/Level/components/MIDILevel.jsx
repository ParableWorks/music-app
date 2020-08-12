import React from 'react';

import OnScreenKeyboard from './OnScreenKeyboard';
import SheetMusic from './SheetMusic';

const MIDILevel = () => {
  return (
    <div>
      this is a midi level
      <SheetMusic notes={["c/4", "e/4", "g/4"]} redNotes={["c/4", "c/5"]} greenNotes={["c/4", "f/5"]} />
      <OnScreenKeyboard />
    </div>
  );
};

export default MIDILevel;
