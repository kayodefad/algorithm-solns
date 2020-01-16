const paceSub = (S , W, T) => W.split('').map(el => S[(S.indexOf(el) + T) % S.length]).join('');


module.exports = paceSub;
