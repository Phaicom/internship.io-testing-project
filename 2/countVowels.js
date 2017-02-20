'use strict'

let input = process.argv[2]
let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 }
const countVowels = (words) => {
    let counter = 0
    words.split('').forEach((word) => {
        switch (word) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vowels[word]++
        }
    })
    Object.values(vowels).forEach((v) => {
        counter += v
    })
    return counter
}
console.log(countVowels(input))
