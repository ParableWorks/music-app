import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Vex from 'vexflow';

const SheetMusic = (props) => {
  const { notes, clef, redNotes, greenNotes } = props;
  const elemRef = useRef();

  const [renderer, setRenderer] = useState(false);
  const VF = Vex.Flow;

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

  useEffect(() => {
    setRenderer(new VF.Renderer(elemRef.current, VF.Renderer.Backends.SVG));
  }, []);

  // this code is very very sketchy
  useEffect(() => {
    if (renderer) {
      const redNoteStyle = {
        fillStyle: 'red',
        strokeStyle: 'red',
      };

      const greenNoteStyle = {
        fillStyle: 'green',
        strokeStyle: 'green',
      };

      const width = 300;
      const height = 100;
      renderer.resize(width, height);
      const context = renderer.getContext();
      context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

      const group = context.openGroup();

      // Create a stave of width 400 at position 10, 40 on the canvas.
      const stave = new VF.Stave(0, 0, width);

      // Add a clef and time signature.
      // stave.addClef("treble").addTimeSignature("4/4");
      stave.addClef(clef);
      stave.setTimeSignature('4/4');

      // Connect it to the rendering context and draw!
      stave.setContext(context).draw();

      const staveNotes = [
        // union of notes and redNotes with no duplicates
        new VF.StaveNote({
          clef,
          // keys: [...new Set([...notes, ...redNotes, ...greenNotes])],
          keys: [],
          duration: 'w',
        }),
      ];

      // if there are notes then render them
      if (staveNotes[0].keys.length !== 0) {
        staveNotes[0] = styleKeys(staveNotes[0], redNotes, redNoteStyle);
        staveNotes[0] = styleKeys(staveNotes[0], greenNotes, greenNoteStyle);

        // Create a voice in 4/4 and add the notes from above
        const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
        voice.addTickables(staveNotes);
        // Format and justify the notes to 400 pixels.
        const formatter = new VF.Formatter()
          .joinVoices([voice])
          .format([voice], width);

        // Render voice
        voice.draw(context, stave);

        // const beams = VF.Beam.generateBeams(notes);
        Vex.Flow.Formatter.FormatAndDraw(context, stave, staveNotes);
        // beams.forEach((b) => { b.setContext(context).draw(); });
      }

      // cleanup before component unmounts
      return () => {
        context.closeGroup();
        context.svg.removeChild(group);
      };
    }
  }, [clef, greenNotes, notes, redNotes, renderer]);
  return <div ref={elemRef} />;
};

export default SheetMusic;

SheetMusic.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.string),
  clef: PropTypes.string,
  redNotes: PropTypes.arrayOf(PropTypes.string),
  greenNotes: PropTypes.arrayOf(PropTypes.string),
};

SheetMusic.defaultProps = {
  clef: 'treble',
  notes: [],
  redNotes: [],
  greenNotes: [],
};
