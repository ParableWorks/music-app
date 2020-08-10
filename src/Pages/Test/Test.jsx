import React from 'react';
import 'react-piano/dist/styles.css';

import OnScreenKeyboard from './components/OnScreenKeyboard';
import VexFlowDemo from './components/VexFlowDemo';

const Test = () => {
  return (
    <div>
      <OnScreenKeyboard />
      <VexFlowDemo />
    </div>
  );
};

export default Test;
