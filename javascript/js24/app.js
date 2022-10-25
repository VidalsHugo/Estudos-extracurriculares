function whatIsInAName(collection, source) {
    const arr = [];

    collection.forEach((e) => {

        let flag = 0;

        for (let i = 0; i < Object.values(e).length; i++) {
            for (let j = 0; j < Object.values(source).length; j++) {

                if (Object.keys(e)[i] == Object.keys(source)[j]) {

                    if (Object.values(e)[i] == Object.values(source)[j]) {
                        flag += 1;
                    }
                }
            }
        }
        if (flag >= Object.values(source).length) {
            arr.push(e);
        }
    })

    return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) 