import fs from 'fs';

let result1 = 0;
let result2 = 0;

const input = fs.readFileSync('day-06/input.txt', 'utf8');
const lines = input.split('\r\n')

const gridSize = 1000;

// Create clear grid
const grid = [];

for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
        grid[x] = grid[x] || [];
        grid[x][y] = 0;
    }
}

const instructions = {
    'turn on': _ => 1,
    'turn off': _ => 0,
    'toggle': v => v ? 0 : 1 ,
};

// Do instructions
for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    const groups = /(?<instruction>.*)\ (?<startX>[0-9]+)\,(?<startY>[0-9]+)\ through\ (?<endX>[0-9]+)\,(?<endY>[0-9]+)/gm.exec(line).groups;
    const { instruction, startX, startY, endX, endY } = groups
        
    for (let x = startX; x <= endX; x++) {
        for (let y = startY; y <= endY; y++) {
            grid[x][y] = instructions[instruction](grid[x][y])
        }
    }
}

// Count turned on lights
for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
        result1 += grid[x][y];
    }
}

result1

