function pad(originalString, symbol, symbolsCount, start = true) {
    const stringLength = originalString.length;
    let finalString = originalString;

    if (stringLength === symbolsCount || symbolsCount < stringLength) {
        console.log(finalString);
        return;
    }

    const symbolsToAddCount = symbolsCount - stringLength;
    for (let i = 0; i <= symbolsToAddCount; i++) {
        if (start) {
            finalString = symbol + finalString;
        } else {
            finalString = finalString + symbol;
        }
    }
    console.log('finalString', finalString);
}
pad('test', '#', 8);
