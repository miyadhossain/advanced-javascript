function add(num1, num2) {
    var result = num1 + num2;
    if (result > 9) {
        let mood = 'happy';
        mood = 'funny';
        //console.log(mood);
    }
    console.log(mood);
    return result;
    
}

const output = add(5,5);

console.log(output);