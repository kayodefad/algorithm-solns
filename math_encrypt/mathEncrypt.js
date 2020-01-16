// a + b * c =>   abc*+
function solution(str) {
    let strS = str.split(' ');
    let matchBrac, joinedBrac;
    
    if(strS.includes('(')) {
        matchBrac = strS.slice(strS.lastIndexOf('(')+1, strS.indexOf(')'));
        joinedBrac = operations(matchBrac);
        if(strS.indexOf('(') == 0) {
            strS.splice(strS.indexOf('('), strS.lastIndexOf(')')+1, joinedBrac);
        } else 
            strS.splice(strS.indexOf('('), strS.lastIndexOf(')')-1, joinedBrac);
    }
    
    return operations(strS);   
}

function operations(expr) {
    for (let i = 0; i < expr.length; i++) {
        while(expr[i] == '*' || expr[i] == '/') 
            expr.splice(i-1, 3, expr[i-1] + expr[i+1] + expr[i]);
    }
    for (let i = 0; i < expr.length; i++) {
        while(expr[i] == '+' || expr[i] == '-') 
            expr.splice(i-1, 3, expr[i-1] + expr[i+1] + expr[i]);
    }
    return expr.join('');
}

module.exports = solution;
