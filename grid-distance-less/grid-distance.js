function gridDistance(arrayOfDirections) {
  let a = arrayOfDirections

  for (let i = 0; i<a.length; i++) {
      a[i] = a[i].split('km-');
      a[i][0] = Number(a[i][0]);
  }
  let southAdd = a.filter(el => el.includes('south')).reduce((a,b) => a+b[0],0);
  let northAdd = a.filter(el => el.includes('north')).reduce((a,b) => a+b[0],0);
  let eastAdd = a.filter(el => el.includes('east')).reduce((a,b) => a+b[0],0);
  let westAdd = a.filter(el => el.includes('west')).reduce((a,b) => a+b[0],0);

  return Math.abs(southAdd-northAdd) + Math.abs(eastAdd-westAdd) + 'km';
}

console.log(gridDistance(['2km-west', '4km-south', '0km-north', '12km-east']));

module.exports = gridDistance;
