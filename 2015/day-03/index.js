import fs from 'fs';

let result1 = null;
let result2 = null;

const input = fs.readFileSync('day-03/input.txt', 'utf8');
const chars = input.split('')

// Part 1
let x = 0;
let y = 0;

let visitedHouses = [ '0x0' ]

for (let i = 0; i < chars.length; i++) {
    const direction = chars[i];

    ({
        '>': () => x++,
        '<': () => x--,
        '^': () => y++,
        'v': () => y--,
    })[direction]()

    const pos = `${x}x${y}`;
    visitedHouses.includes(pos) || visitedHouses.push(pos);
}

result1 = visitedHouses.length

result1

// Part 2
let santa = { x: 0, y: 0, }
let robo = { x: 0, y: 0, }

let visitedHouses2 = [ '0x0' ]

for (let i = 0; i < chars.length; i++) {
    const direction = chars[i];

    let traveller = i % 2 == 0 ? santa : robo;

    ({
        '>': (traveller) => traveller.x++,
        '<': (traveller) => traveller.x--,
        '^': (traveller) => traveller.y++,
        'v': (traveller) => traveller.y--,
    })[direction](traveller)

    const pos = `${traveller.x}x${traveller.y}`;
    visitedHouses2.includes(pos) || visitedHouses2.push(pos);
}

result2 = visitedHouses2.length

result2