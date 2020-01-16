function wordLength(arr) {
    return new Map([...new Set(arr.map(el => [el.toLowerCase(), el.length]))]);   
}

console.log(wordLength(["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]));

module.exports = wordLength;