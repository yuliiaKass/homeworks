function checkProbabilityTheory(count) {
    let pairedNumbersCount = 0;
    let unpairedNumbersCount = 0;

    for (let i = 1; i <= count; i++) {
        const randomNumber = Math.round(100 + Math.random() * (1000 - 100));
        if (randomNumber % 2 === 0) {
            pairedNumbersCount++;
        } else {
            unpairedNumbersCount++;
        }
    }

    console.log('count of generated numbers:', count);
    console.log('count of paired numbers:', pairedNumbersCount);
    console.log('count of unpaired numbers:', unpairedNumbersCount);

    console.log('probability of paired numbers:', (pairedNumbersCount / count).toFixed(2) + '%');
    console.log('probability of unpaired numbers:', (unpairedNumbersCount / count).toFixed(2) + '%');

    // я не впевнена, що правильно зрозуміла умову завдання "Відсоток парних до не парних:", тому нижче ще один варіант реалізації – саме відношення парних чисел до не парних
    if (unpairedNumbersCount === 0) {
        console.log('All numbers are paired');
    } else if (pairedNumbersCount === 0) {
        console.log('All numbers are unpaired');
    } else {
        const percentage = (pairedNumbersCount / unpairedNumbersCount) * 100;
        console.log('percentage paired to unpaired:', percentage.toFixed(2) + '%');
    }
}

checkProbabilityTheory(5);
