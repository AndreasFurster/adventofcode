import fs from 'fs';

let result1 = 0;
let result2 = 0;

const input = fs.readFileSync('day-02/input.txt', 'utf8');
const gifts = input.split('\r\n')

for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    
    const dimentions = gift.split('x')

    const [l, w, h] = dimentions
    const surfaceArea = 2 * l * w + 2 * w * h + 2 * h * l

    const slack = Math.min(l * w, w * h, h * l)

    const paper = surfaceArea + slack

    result1 += paper

    const [smallestSide1, smallestSide2] = dimentions.sort((a, b) => a - b)
    const ribbonAround = 2 * smallestSide1 + 2 * smallestSide2;

    const bow = l * w * h;

    result2 += ribbonAround + bow
}

result1
result2

// let level = 0;

// for (let i = 0; i < chars.length; i++) {
//     const char = chars[i];

//     level += char == '(' ? 1 : -1;
    
//     // If in basement
//     if(level < 0) {
//         result2 = i + 1;
//         break;
//     }
// }

// result2