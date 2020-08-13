export const PLAY_NOTE = 'PLAY_NOTE';

export function playNote(note) {
  return {
    type: PLAY_NOTE,
    payload: note,
  };
}
