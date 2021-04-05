const pattern = [
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  true
]
const letters = ['C', 'D', 'E', 'F', 'G', 'A', 'B']

export let notemap: { [n: string]: string } = {}

const offsets = [48, 60, 72]

for (const i in offsets) {
  let k = 0
  for (const j in pattern) {
    if (pattern[j]) {
      notemap[Number(offsets[i]) + Number(j)] = letters[k++] + i
    }
  }
}
