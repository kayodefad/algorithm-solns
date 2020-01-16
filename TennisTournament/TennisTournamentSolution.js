

function solution(P,C) {
    // if(Math.floor(P/2) > C) {
    //     return C;
    // } else {
    //     return Math.floor(P/2);
    // }
    return (Math.floor(P/2) > C) ? C : Math.floor(P/2);
} 

module.exports = solution;