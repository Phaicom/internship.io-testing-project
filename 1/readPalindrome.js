'use strict'

let fs = require("fs");
let path = process.argv[2]
let data = fs.readFileSync(path);
let before = data.toString().replace(/[^A-Za-z0-9 ]+/g, " ").split(' ');
let check, count = {};
before.forEach((item) => {
    if (item != '') {
        check = item.split('').reverse().join('')
        if (check === item) {
            if (count[item] === undefined)
                count[item] = 0;
            count[item]++;
        }
    }
})
console.log(Object.keys(count).length)