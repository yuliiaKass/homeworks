function customIsNaN(value) {
    if (value + 0 === value || value === null || typeof value === 'boolean') {
        return false;
    } else {
        return true;
    }
}
console.log('customIsNaN', customIsNaN('boolean'));


// for checking
console.log('isNaN', isNaN('boolean'));
