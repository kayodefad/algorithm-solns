function socksLaundering(numberMachineCanWash, cleanSocks, numberOfCleanSocks, dirtySocks, numberOfDirtySocks) {
  let k = numberMachineCanWash, c, d
  c=[].concat(cleanSocks).sort((a,b) => a-b);
  d=[].concat(dirtySocks).sort((a,b) => a-b);
  let clean = [];
  let dirty = [];

  for(let i = 0; i<c.length;i++) {
    if(c[i]==c[i+1]) clean.push(c.splice(c.indexOf(c[i]), 2, ''))
  }

  cleanPairs = clean.length;
  let count = 0;

  for(let i = 0; i<c.length; i++) {
    for(let j = 0; j<d.length; j++) {
      if(c[i]==d[j]) {
        c.splice(c.indexOf(c[i]), 1)
        d.splice(d.indexOf(d[j]), 1)
        count++
      }
    }
  }

  for(let i = 0; i<d.length; i++) {
    if(d[i] == d[i+1]) {
      dirty.push(d.splice(d.indexOf(d[i]), 2, ''))
    }
  }

  let rem = k-count
  let socksToWash = dirty.length*2
  return rem == 0  ? cleanPairs+count : rem < 0 ? cleanPairs : socksToWash/2 > rem/2 ? cleanPairs+count+Math.floor(rem/2) : cleanPairs+count+dirty.length
}

module.exports = socksLaundering;