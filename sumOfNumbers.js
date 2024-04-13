// Вивести на екран суму чисел від 1 до 100 включно, які не кратні 3.

let sum = 0;
for (let number = 1; number <= 100; number++) {
    if (number % 3 !== 0) {
        sum += number;
    }
}
console.log('Сума всіх чисел, які не кратні 3 –', sum);
