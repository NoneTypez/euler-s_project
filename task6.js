// Сумма квадратов первых десяти натуральных чисел равна

// 1**2 + 2**2 + ... + 10**2 = 385
// Квадрат суммы первых десяти натуральных чисел равен

// (1 + 2 + ... + 10)**2 = 552 = 3025
// Следовательно, разность между суммой квадратов и квадратом суммы первых десяти натуральных чисел составляет 3025 − 385 = 2640.

// Найдите разность между суммой квадратов и квадратом суммы первых ста натуральных чисел.

const difference = (countOfNumbers) => {
	let sumOfSquares = 0;
	let squareOfSum = 0;
	let justSum = 0;
	for (let i = 1; i <= countOfNumbers; i++) {
		sumOfSquares += i ** 2;
	}
	for (let i = 1; i <= countOfNumbers; i++) {
		justSum += i;
	}
	squareOfSum = justSum ** 2;
	return squareOfSum - sumOfSquares;
};

console.log(difference(100));
