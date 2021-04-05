import fs from 'fs'
import { parseMidi } from 'midi-file'
import robot from 'robotjs'
import { getFormattedNotes } from './getFormattedNotes'
import { Note } from './Note'
import { play } from './play'

// Read MIDI file into a buffer
var input = fs.readFileSync(
  'songs/Kimi no na wa OST - Kataware Doki [Transcribed by UnknownEX1].mid'
)

// Parse it into an intermediate representation
// This will take any array-like object.  It just needs to support .length, .slice, and the [] indexed element getter.
// Buffers do that, so do native JS arrays, typed arrays, etc.
var parsed = parseMidi(input)

let track
let longest = 0

for (const t of parsed.tracks) {
  if (t.length > longest) {
    track = t
    longest = t.length
  }
}

const msPerBeat = 923075 / 1000
const { ticksPerBeat } = parsed.header
const tickLength = msPerBeat / ticksPerBeat // the length of 1 tick in ms (delta time = tick)

const notes: Note[] = track.filter(
  (note: Note) => note.type === 'noteOn' || note.type === 'noteOff'
)

robot.moveMouse(550, 1000)
robot.mouseClick()

// robot.keyTap('q')

// let lowest = Infinity
// let highest = 0

// for (const note of notes) {
//   if (note.noteNumber < lowest) lowest = note.noteNumber
//   if (note.noteNumber > highest) highest = note.noteNumber
// }

// console.log('lowest', lowest)
// console.log('highest', highest)
// console.log('notemap', notemap)

// console.log(getFormattedNotes(notes))

const formattedNotes = getFormattedNotes(notes)

play(formattedNotes, tickLength)
