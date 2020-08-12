import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Vex from 'vexflow';

const SheetMusic = (props) => {
  const { notes, clef, redNotes, greenNotes } = props;
  const elemRef = useRef();

  /**
   * applies styles to a vex note with multiple keys
   * @param {Vex.Flow.StaveNote} note Vex note with keys in it
   * @param {Array.<String>} styledNotes string of values of the notes to be styles
   * @param {Object} style object with vexflow styling for a note
   */
  const styleKeys = (note, styledNotes, style) => {
    note.keys.forEach((key, index) => {
      if (styledNotes.find((element) => element === key)) {
        note.setKeyStyle(index, style);
        note.setLedgerLineStyle(index, style);
      }
    });
    return note;
  };

  const redNoteStyle = {
    fillStyle: "red",
    strokeStyle: "red",
  };

  const greenNoteStyle = {
    fillStyle: "green",
    strokeStyle: "green",
  };

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

    let staveNotes = [
      // union of notes and redNotes with no duplicates
      new VF.StaveNote({ clef, keys: [...new Set([...notes, ...redNotes, ...greenNotes])], duration: "w" }),
    ];

    staveNotes[0] = styleKeys(staveNotes[0], redNotes, redNoteStyle);
    staveNotes[0] = styleKeys(staveNotes[0], greenNotes, greenNoteStyle);

    // Create a voice in 4/4 and add the notes from above
    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(staveNotes);
    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);

    // const beams = VF.Beam.generateBeams(notes);
    Vex.Flow.Formatter.FormatAndDraw(context, stave, staveNotes);
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
  redNotes: PropTypes.arrayOf(PropTypes.string),
  greenNotes: PropTypes.arrayOf(PropTypes.string),
};

SheetMusic.defaultProps = {
  clef: 'treble',
  redNotes: [],
  greenNotes: [],
};
