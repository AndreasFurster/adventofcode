import fs from 'fs';

let result1 = null;
let result2 = null;

const input = fs.readFileSync('input.txt', 'utf8');
const lines = input.split('\n')

const calculateFuel = mass => Math.floor(mass / 3) - 2

for (let i = 0; i < lines.length; i++) {
  // part 1
  const mass = lines[i];
  const fuel = calculateFuel(mass)
  result1 += fuel
  
  // part 2
  result2 += fuel
  let additionalWeight = fuel
  while(true) {
    const additionalFuel = calculateFuel(additionalWeight)
    additionalWeight = additionalFuel
    
    if(additionalFuel > 0) {
      result2 += additionalFuel
    }
    else {
      break
    }
  }
}

console.log(result1)
console.log(result2)