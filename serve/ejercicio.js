function solution(array) {
	return array.map(item => item * 2);
}; 

const array = [2,4,5,6];
const solutionArray = solution(array);

console.log('array inicial ', array);
console.log('array final', solutionArray);