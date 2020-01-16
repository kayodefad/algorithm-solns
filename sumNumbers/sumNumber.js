function sumNumbers(str) {
//   let strS = str.split('');
//   for (let i = 0; i < strS.length; i++) {
//       strS[i] = parseInt(strS[i]);
//   }
//   for (let i = 0; i < strS.length; i++) {
//       if(isNaN(strS[i])) strS[i] = ' ';
//   }
//   let joinedStr = strS.join('').split(' ');
//   for (let i = 0; i<joinedStr.length; i++) {
//       joinedStr[i] = parseInt(joinedStr[i]);
//   }
//   return joinedStr.filter(el => !isNaN(el)).reduce((a,b) => a+b,0); 
  return [...str].map(el => isNaN(el) ? ' ' : el).join('').split(' ').reduce((a, b) => a + Number(b), 0);
}

module.exports = sumNumbers