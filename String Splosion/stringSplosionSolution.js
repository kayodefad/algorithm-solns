function stringSplosion(str) {
  // let s = [str]
  // for (let i = str.length-1; i>0; i--) {
  //   s.unshift(str.slice(0,i));
  // }
  // return s.join('')
  let s = str[0];
  for (let i = 2; i <= str.length; i++) {
    s += str.slice(0,i);
  }
  return s;
}

module.exports = stringSplosion;

console.log(stringSplosion('Code'))

// stringSplosion("Code") → "CCoCodCode"