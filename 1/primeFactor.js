'use strict'

const primeFactor = (num) => {
    let rs = []
    for (var i = 2; i <= num; i++) {
        while (num % i === 0) {
            rs.push(i)
            num /= i
        }
    }
    return rs.join(' ')
}

let input = process.argv[2]
console.log(primeFactor(input))