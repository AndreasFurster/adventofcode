import fs from 'fs';
import crypto from 'crypto';


let result1 = null;
let result2 = null;

const input = fs.readFileSync('day-04/input.txt', 'utf8')

let key = 0

while (true) {
  const hash = crypto.createHash('md5').update(input + key).digest("hex")

  if (!result1 && hash.startsWith('00000')) {
    result1 = key
  }

  if (hash.startsWith('000000')) {
    result2 = key
    break
  }

  key++
}

console.log('Part 1: ' + result1)
console.log('Part 2: ' + result2)