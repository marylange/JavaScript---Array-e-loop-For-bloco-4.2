let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];


for(let i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        let mult = numbers[j] * numbers[i];
        newArray.push(mult);
    }
}
console.log('a',newArray);