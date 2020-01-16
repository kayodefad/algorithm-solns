function switchChar (inputChar, actualChar, changeChar){
    let newArr = [];
    
    if (actualChar.length != changeChar.length) return 'Length mismatch'
    for (let i = 0; i<actualChar.length; i++) {
        if(actualChar.indexOf(actualChar[i]) != actualChar.lastIndexOf(actualChar[i])) return 'Repeated value'
    }
    if(inputChar.length > actualChar.length) return -1;
    for (let i = 0; i<inputChar.length; i++) {
        if(actualChar.indexOf(inputChar[i]) == -1) return -1
    }

    for (let i = 0; i<inputChar.length; i++) {
        if(actualChar.includes(inputChar[i])) {
            newArr.push(changeChar[actualChar.indexOf(inputChar[i])]);
        }
    }    
    return newArr.join('');
}


module.exports = switchChar;
