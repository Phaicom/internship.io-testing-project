'use strict';

let fs = require('fs');
let path = process.argv[2];
let file = fs.readFileSync(path);
let count = 0;
file.toString().split("\n").forEach(i => {
    let item = i.replace(/[^A-Za-z0-9]+/g, '').split(''),
    if (before === after)
        count++;
})
console.log(count)
