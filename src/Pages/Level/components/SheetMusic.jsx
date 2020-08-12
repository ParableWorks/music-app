import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Vex from 'vexflow';

const SheetMusic = (props) => {
  const { notes, clef } = props;
  const elemRef = useRef();

  useEffect(() => {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element
    const renderer = new VF.Renderer(elemRef.current, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(800, 100);
    const context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new VF.Stave(0, 0, 800);

    // Add a clef and time signature.
    // stave.addClef("treble").addTimeSignature("4/4");
    stave.addClef(clef);
    stave.setTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    const VFnotes = [
      new VF.StaveNote({ clef, keys: notes, duration: "w" }),
    ];

    // Create a voice in 4/4 and add the notes from above
    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(VFnotes);
    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);

    // const beams = VF.Beam.generateBeams(notes);
    // Vex.Flow.Formatter.FormatAndDraw(context, stave, VFnotes);
    // beams.forEach((b) => { b.setContext(context).draw(); });
  }, []);
  return (
    <div ref={elemRef} />
  );
};

export default SheetMusic;

SheetMusic.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string).isRequired,
  clef: PropTypes.string,
};

SheetMusic.defaultProps = {
  clef: 'treble',
};
