// Request MIDI access
let MIDIObject;

const testing = true;

function onTesting() {
  window.addEventListener('keydown', (event) => {
    const note = keyToNote(event.key);
    noteOn(note);
  });
}

setTimeout(() => {
  if (testing) {
    return onTesting();
  }
  if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);
  } else {
    console.log('WebMIDI is not supported in this browser.');
  }
}, 0);

// Function to run when requestMIDIAccess fails
function onMIDIFailure() {
  console.log('Error: Could not access MIDI devices.');
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
    //console.log('midi is some other number');
  }
}

const noteSequence = [];

function getNoteSequence() {
  return noteSequence;
}

export default getNoteSequence;

function noteOn(note) {
  noteSequence.push(note);
  // switch (note % 12) {
  //   case 0:
  //     console.log('C');
  //     break;
  //   case 1:
  //     console.log('C#');
  //     break;

  //   case 2:
  //     console.log('D');
  //     break;

  //   case 3:
  //     console.log('Eb');
  //     break;

  //   case 4:
  //     console.log('E');
  //     break;

  //   case 5:
  //     console.log('F');
  //     break;

  //   case 6:
  //     console.log('F#');
  //     break;

  //   case 7:
  //     console.log('G');
  //     break;

  //   case 8:
  //     console.log('G#');
  //     break;

  //   case 9:
  //     console.log('A');
  //     break;

  //   case 10:
  //     console.log('Bb');
  //     break;

  //   case 11:
  //     console.log('B');
  //     break;
  //   default:
  //     console.log('something went wrong');
  // }
}

function keyToNote(key) {
  switch (key) {
    case 'a':
      return 60;
    case 'w':
      return 61;
    case 's':
      return 62;
    case 'e':
      return 63;
    case 'd':
      return 64;
    case 'f':
      return 65;
    case 't':
      return 66;
    case 'g':
      return 67;
    case 'y':
      return 68;
    case 'h':
      return 69;
    case 'u':
      return 70;
    case 'j':
      return 71;
    case 'k':
      return 72;
    case 'o':
      return 73;
    case 'l':
      return 74;
    case 'p':
      return 75;
    case ';':
      return 76;
    case "'":
      return 77;

    default:
      break;
  }
}
