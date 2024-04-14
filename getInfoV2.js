let obj = {
    name: 'Yulia',
    age: 18,
    isQA: true,
};

function getInfo(ourObject) {
    for (const item in ourObject) {
        console.log(item + `:` + ourObject[item]);
    }
}

getInfo(obj);

// obj.newProperty = 'new one';
// getInfo(obj);
