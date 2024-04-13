function pow(x,y) {
    let result = x;
    if (x === 0) {
        result = 0;
    }
    if (y === 0 || x === 0 && y === 0) {
        result = 1;
    }
    if (y < 0) {
        console.log(`Краще б ви не вводити від\'ємну ступінь :) Дякую, що хоч не дробна.`);
        for (let i = -1; i > y; i--) {
            result *= x;
        }
        result = 1 / result;
    } else {
        for (let i = 1; i < y; i++) {
            result *= x;
        }
    }
    console.log(result);
}

pow(0,2);
