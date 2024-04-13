// Оголошуємо змінну result та з кожною ітерацією додаємо до неї символ
function drawTriangle(count, symbol) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += symbol;
        console.log(result);
    }
};
drawTriangle(3, '▽');

function drawTriangleAnotherWay(count, symbol) {
    let result = '';
    let i = 1;
    while (i <= count) {
        result += symbol;
        i++;
        console.log(result);
    }
}
drawTriangleAnotherWay(7, '▽');




// ------------------------------------------------------
// Використовуємо метод repeat() для повторення символу
function drawTriangleV2(count, symbol) {
    for (let i = 1; i <= count; i++) {
        console.log(symbol.repeat(i));
    }
};
drawTriangleV2(13, '▽');
