import React, { useEffect, useRef } from 'react';
import Vex from 'vexflow';

const VexFlowDemo = () => {
  const elemRef = useRef();

  useEffect(() => {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element
    const renderer = new VF.Renderer(elemRef.current, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(1000, 500);
    const context = renderer.getContext();
    context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new VF.Stave(10, 40, 800);

    // Add a clef and time signature.
    stave.addClef("treble").addTimeSignature("4/4");

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();

    const notes = [
      // // A quarter-note C.
      // new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" }),

      // // A quarter-note D.
      // new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "q" }),

      // // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // // position of the rest.
      // new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "qr" }),

      // // A C-Major chord.
      // new VF.StaveNote({ clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" }),

      new VF.StaveNote({ clef: "treble", keys: ["e##/5"], duration: "8d" })
        .addAccidental(0, new VF.Accidental("##")).addDotToAll(),
      new VF.StaveNote({ clef: "treble", keys: ["b/4"], duration: "16" })
        .addAccidental(0, new VF.Accidental("b")),
      new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "8" }),
      new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "16" }),
      new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "16" })
        .addAccidental(0, new VF.Accidental("b")),
      new VF.StaveNote({ clef: "treble", keys: ["d/4"], duration: "16" }),
      new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "16" })
        .addAccidental(0, new VF.Accidental("#")),
      new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "32" }),
      new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "32" }),
      new VF.StaveNote({ clef: "treble", keys: ["g/4"], duration: "16" }),
      new VF.StaveNote({ clef: "treble", keys: ["c/4", "e/4", "g/4"], duration: "q" }),
    ];

    // Create a voice in 4/4 and add the notes from above
    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);
    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    // voice.draw(context, stave);

    const beams = VF.Beam.generateBeams(notes);
    Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
    beams.forEach((b) => { b.setContext(context).draw(); });
  }, []);
  return (
    <div ref={elemRef} />
  );
};

export default VexFlowDemo;
