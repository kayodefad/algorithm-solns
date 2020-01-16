//The Encoder function takes two arrays as its parameters, raw and code_words.
//This function replaces the words in `raw` with the words in `code_words` such that the first occurrence of
//each word in `raw` is assigned the first unassigned word in `code_words`

function encoderSolution(arr1, arr2) {
    // let newObj={}
    // let temp = [...new Set(arr1)]
    // for(let i=0;i<temp.length;i++) {
    //     newObj[temp[i]] = arr2[i]
    // }
    // return arr1.map(el => newObj[el])
    return arr1.map(el => arr2[arr1.indexOf(el)]);
}

module.exports = encoderSolution;


