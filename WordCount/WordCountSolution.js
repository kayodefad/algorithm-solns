function wordCount(arrayOfStrings) {
    let result = {};
    
    for(let i = 0; i < arrayOfStrings.length; i++) {
      // if(result[arrayOfStrings[i]]) {
      //   result[arrayOfStrings[i]]++;
      // } else result[arrayOfStrings[i]] = 1;
      result[arrayOfStrings[i]] = (result[arrayOfStrings[i]] || 0) + 1
    }
    return result; 
}

module.exports = wordCount;