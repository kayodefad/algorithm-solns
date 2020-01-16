function highestSum(Y, N) {
    let newArr = [];    
    let y = Y.split('');  
    y = y.map(el => parseInt(el, 16)) 
    for (let i = 0; i<y.length; i++) {
        while(y.length >= N) 
            newArr.push(y.splice(0,N))
    }
    newArr = newArr.map(el => el.reduce((a,b) => a+b,0))
    return newArr.length == 0 ? 0 : Math.max(...newArr);
}


module.exports = highestSum;