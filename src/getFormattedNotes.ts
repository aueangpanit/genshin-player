import { FormattedNote } from './FormattedNotes'
import { Note } from './Note'

export function getFormattedNotes(notes: Note[]): FormattedNote[] {
  const formattedNotes: FormattedNote[] = []
  let tempNotes: number[] = []
  let deltaTime = 0

  for (const note of notes) {
    if (note.deltaTime) {
      formattedNotes.push({ noteNumbers: tempNotes, deltaTime })
      deltaTime = note.deltaTime
      tempNotes = []
    }

    if (note.type === 'noteOn') {
      tempNotes.push(note.noteNumber)
    }
  }

  return formattedNotes
}
