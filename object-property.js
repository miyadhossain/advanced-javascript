const students = [
    {id: 21, name: 'Jishan'},
    {id: 31, name: 'Oshan'},
    {id: 41, name: 'Ashiq'},
    {id: 51, name: 'Shahriar'}
]
// let output = []
// for (let i = 0; i < students.length; i++) {
//     const element = students[i].name;
//     output.push(element);
// }

const names = students.map((s => s.id));
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);