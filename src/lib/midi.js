// Request MIDI access
let MIDIObject;

if (navigator.requestMIDIAccess) {
  console.log('This browser supports WebMIDI!');

  navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
} else {
  console.log('WebMIDI is not supported in this browser.');
}

// Function to run when requestMIDIAccess is successful
function onMIDISuccess(midiAccess) {
  const inputs = midiAccess.inputs.values();

  console.log('Got midi!', midiAccess);

  for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
    input.value.onmidimessage = onMIDIMessage;
  }
}

function onMIDIMessage(message) {
  const command = message.data[0];
  const note = message.data[1];
  const velocity = message.data.length > 2 ? message.data[2] : 0; // velocity value may not be included with noteOff command

  switch (command) {
    case 145:
      // console.log(message.data);

      noteOn(note);
      break;
    case 129:
      // noteOff(note);
      break;
    default:
      console.log('midi is some other number');
  }
}

function noteOn(note) {
  switch (note % 12) {
    case 0:
      console.log('C');
      break;
    case 1:
      console.log('C#');
      break;

    case 2:
      console.log('D');
      break;

    case 3:
      console.log('Eb');
      break;

    case 4:
      console.log('E');
      break;

    case 5:
      console.log('F');
      break;

    case 6:
      console.log('F#');
      break;

    case 7:
      console.log('G');
      break;

    case 8:
      console.log('G#');
      break;

    case 9:
      console.log('A');
      break;

    case 10:
      console.log('Bb');
      break;

    case 11:
      console.log('B');
      break;
    default:
      console.log('something went wrong');
  }
}

// Function to run when requestMIDIAccess fails
function onMIDIFailure() {
  console.log('Error: Could not access MIDI devices.');
}
