let numbers = [5, 9, 3, 19, 35, 27];

// let result = 0;
// for(let i = 0; i < numbers.length; i += 1) {

// 	if(numbers[i] % 2 !== 0) {
// 		result += 1;
// 		console.log(result);
// 	}

// 	console.log('nenhum valor ímpar encontrado');
// }
let a = [];
const c = numbers.filter((element) => {
	let result = 0;
	if(element % 2 !== 0){
		result += 1;
		a.push(result);
		console.log(a);
	};
	return 'nenhum valor ímpar encontrado';
});

console.log(c);