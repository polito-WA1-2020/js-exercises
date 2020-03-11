"use strict" ;

const courselist = `Web Applications I, Computer Architectures, 
Data Science and Database Technology, Computer network technologies and services,
 Information systems security, Software engineering, 
 System and device programming` ;

const courses = courselist.split(',') ;

for( let [i, c]  of courses.entries() ) {
    courses[i] = c.trim() ;
}

// Create acronyms for the courses

const acronyms = [] ;

for( const c of courses ) {
    const words = c.split(' ') ;
    let acronym = '' ;
    for( const w of words )
        acronym += w[0].toUpperCase() ;
    
    acronyms.push(acronym) ;
}

const output = [] ;
for(let [i, a] of acronyms.entries()) {
    // output.push(a + ' - ' + courses[i]) ;
    output.push(`${a} - ${courses[i]}`) ;
}

output.sort() ;
console.log(output) ;

// console.log(courselist) ;
console.log(courses) ;
console.log(acronyms) ;
