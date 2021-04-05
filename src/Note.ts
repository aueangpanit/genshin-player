export interface Note {
  deltaTime: number
  channel: number
  type: 'noteOn' | 'noteOff'
  noteNumber: number
  velocity: number
  byte9: boolean
}
