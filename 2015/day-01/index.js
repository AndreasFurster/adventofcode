import fs from 'fs';

let result1 = null;
let result2 = null;

const input = fs.readFileSync('day-01/input.txt', 'utf8');
const chars = input.split('')

const levelsUp = chars.filter(v => v == '(').length
const levelsDown = chars.filter(v => v == ')').length

result1 = levelsUp - levelsDown
result1

let level = 0;

for (let i = 0; i < chars.length; i++) {
    const char = chars[i];

    level += char == '(' ? 1 : -1;
    
    // If in basement
    if(level < 0) {
        result2 = i + 1;
        break;
    }
}

result2