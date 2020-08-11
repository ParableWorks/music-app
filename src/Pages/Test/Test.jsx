import React from 'react';
import 'react-piano/dist/styles.css';

import VexFlowDemo from './components/VexFlowDemo';
import OnScreenKeyboard from '../../Pages/Level/components/OnScreenKeyboard';

const Test = () => {
  return (
    <div>
      <OnScreenKeyboard />
      <VexFlowDemo />
    </div>
  );
};

export default Test;
