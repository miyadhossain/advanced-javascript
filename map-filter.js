const numbers = [2,3,4,5,8,9];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

function squra(element) {
    return element * element;
}

const squre = (element) => element * element;

const result = numbers.map(x => x*x)

console.log(result);

const bigger = numbers.filter(element => element < 5);
const isThere = numbers.find(element => element < 5);
console.log(isThere);