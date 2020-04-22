// Description:

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
// Your task is to calculate how many blank pages do you need.

// Example:
// paperwork(5, 5) == 25

// Note: if n < 0 or m < 0 return 0!



// Solution:

function paperwork(n, m) {
    let copy = 0
    
    if (n < 0 || m < 0) {
      copy = 0;
    } else {
      copy = m * n;
    }

    return copy;  
}

paperwork(5,5); // 25
paperwork(5,-5); // 0
paperwork(-5,-5); // 0
paperwork(5,0); // 0
paperwork(-5,5); // 0