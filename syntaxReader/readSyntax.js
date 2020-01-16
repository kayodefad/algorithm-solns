function readSyntax(syntax) {
    let closingBracs = [']', '}', '>', ')']
    let openingBracs = ['[', '{', '<', '(']
    
    syntax = syntax.split('');
    for (let i = 0; i<syntax.length; i++) {
        for (let j = 0; j<closingBracs.length; j++) {
            if((syntax.indexOf(closingBracs[j]) < syntax.indexOf(openingBracs[j])) || syntax.indexOf(closingBracs[j]) != -1 && syntax.indexOf(openingBracs[j]) == -1){
                return syntax.indexOf(closingBracs[j]);
            } else for (let i = 0; i < openingBracs.length; i++) {
                if (syntax.indexOf(openingBracs[i]) != -1 && syntax.indexOf(closingBracs[i]) == -1) return syntax.indexOf(openingBracs[i]);
            }
        } 
    }
    return 'ok';
}


module.exports = readSyntax;
