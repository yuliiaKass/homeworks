function customIsNaN(value) {
    if (value + 0 === value || value === null || typeof value === 'boolean') {
        return false;
    }
    return true;
}
console.log('customIsNaN', customIsNaN(44));


// for checking
console.log('isNaN', isNaN(44));
