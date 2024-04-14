var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
};

services['Розбити скло'] = "200 грн";

function price(object) {
    let sum = 0;
    for (const item in object) {
        sum += parseInt(object[item]);
    }
    return sum + ' грн';
}

function minPrice(object) {
    let minimumPrice = parseInt(Object.values(object)[0]);
    for (const item in object) {
        let itemPrice = parseInt(object[item]);
        if (itemPrice < minimumPrice) {
            minimumPrice = itemPrice;
        }
    }
    return minimumPrice + ' грн';
}

function maxPrice(object) {
    let maximumPrice = parseInt(Object.values(object)[0]);
    for (const item in object) {
        let price = parseInt(object[item]);
        if (price > maximumPrice) {
            maximumPrice = price;
        }
    }
    return maximumPrice + ' грн';
}

console.log('Загальна вартістість послуг:', price(services));
console.log('Мінімальна ціна:', minPrice(services));
console.log('Максимальна ціна:', maxPrice(services));
