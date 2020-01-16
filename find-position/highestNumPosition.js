function highestNumPosition(arr) {
    let maxNum = Math.max(...arr.reduce((a,b) => a.concat(b), []));
    for (let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr[i].length; j++)
            if(arr[i][j] === maxNum) return [i,j];
    }
    return [0,0];
}


module.exports = highestNumPosition;