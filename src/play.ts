import { keyboard } from '@nut-tree/nut-js'
import { FormattedNote } from './FormattedNotes'
import { keymap } from './keymap'
import { notemap } from './notemap'
import { sleep } from './sleep'

export async function play(notes: FormattedNote[], tickLength: number) {
  keyboard.config.autoDelayMs = 0
  for (const note of notes) {
    if (note.deltaTime > 0) {
      // console.log('sleep', tickLength * note.deltaTime)
      await sleep(tickLength * note.deltaTime)
    }

    let letters: string[] = []

    for (const noteNumber of note.noteNumbers) {
      const letter = keymap[notemap[noteNumber]]

      if (letter) {
        letters.push(letter)
      }
    }

    // console.log(letters)
    try {
      console.log(letters)
      keyboard.type(letters.join())
    } catch (error) {
      console.error(error)
    }
  }
}
