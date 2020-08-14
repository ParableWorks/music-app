import React, { useEffect, useState } from 'react';
import Soundfont from 'soundfont-player';
// import { useSelector } from 'react-redux';

const SoundPlayer = () => {
  // const noteBuffer = useSelector((state) => state.noteBuffer);
  const [loading, setLoading] = useState(true);
  const [instrument, setInstrument] = useState();

  useEffect(() => {
    const ac = new AudioContext();
    Soundfont.instrument(ac, 'acoustic_grand_piano').then((piano) => {
      setInstrument(piano);
      setLoading(false);
    });
  }, []);

  // useEffect(() => {
  //   if (!loading) {
  //     // if (noteBuffer !== undefined && noteBuffer[0] !== undefined) {
  //       instrument.play(40);
  //     // }
  //   }
  // }, [loading, instrument]);

  return <></>;
};

export default SoundPlayer;
