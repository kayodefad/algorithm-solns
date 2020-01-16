
function evenlySpaced(first,second,last) {
    let newArr = [...arguments].sort((a,b) => a-b);
    return (newArr[1]-newArr[0] === newArr[2]-newArr[1]);
}

module.exports = evenlySpaced;