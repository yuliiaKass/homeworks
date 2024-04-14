let obj = {
    name: 'Yulia',
    age: 18,
    isQA: true,
    getInfo() {
        for (const item in obj) {
            console.log(item + `:` + obj[item]);
        }
    }
};

obj.getInfo();

// obj.newProperty = 'new one';
// obj.getInfo();
