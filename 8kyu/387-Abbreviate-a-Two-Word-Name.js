// Description:

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

// Solution:

function abbrevName(name){

    return name.split(' ').map(letter => letter[0].toUpperCase()).join('.');
    
}

abbrevName("Sam Harris"); // "S.H"
abbrevName("george clooney"); // "G.C"
abbrevName("P Favuzzi"); // "P.F"
abbrevName("reese witherspoon"); // "R.W"
abbrevName("David Mendieta"); // "D.M"
abbrevName("eliza doolittle"); // "E.D"



// Fun Solution (it doesn't work with lowercase letters): 

function abbrevName(name){
    let initials = name
    let word = ''
    
    for (let i = 0; i < initials.length; i++) {
        if (initials[i] == initials[i].toUpperCase()) {
            word += initials[i];
        }
    }
    
    return word.charAt(0) + '.' + word.charAt(2);
}

abbrevName("Sam Harris"); // "S.H"
abbrevName("george clooney"); // "G.C"
abbrevName("P Favuzzi"); // "P.F"
abbrevName("reese witherspoon"); // "R.W"
abbrevName("David Mendieta"); // "D.M"
abbrevName("eliza doolittle"); // "E.D"