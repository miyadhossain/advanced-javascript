let numbers = [1,2,3,4,5,6,7,8];
let part = numbers.slice(2,6);

let numbers2 = [1,2,3,4,5,6,7,8];
const removed = numbers2.splice(3,3, 14,15,17);
const toGether = numbers2.join(' ');
// console.log(part);
// console.log(removed);
console.log(numbers2);
console.log(toGether);