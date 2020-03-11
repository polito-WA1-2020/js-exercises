"use strict" ;

const scores = [ 21, 28, 18, 25, 27, 24, 24, 20, 30, 28 ] ;

const betterScores = Array.from(scores) ; // [ ...scores ]

// find the min
let minScore = Math.min(...betterScores) ;

//remove it
let pos = betterScores.indexOf(minScore) ;
betterScores.splice(pos, 1) ;

// find the min
minScore = Math.min(...betterScores) ;

//remove it
pos = betterScores.indexOf(minScore) ;
betterScores.splice(pos, 1) ;

// compute the average of the scores
let avg = 0 ;
for( const s of betterScores ) {
    avg += s ;
}
avg /= betterScores.length ;
avg = Math.round(avg) ;

// add the average to the list of scores
betterScores.push(avg, avg) ;

console.log(scores) ;
console.log(betterScores) ;