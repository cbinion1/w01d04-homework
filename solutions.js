//Verbal Questions:


//1. Parameters are the aliases for the values that are passed to a function, while arguments are the 
//actual values.  

//2. Within a function, return ends a function and returns a value according to the code within the 
//function, while console.log only prints the argument assigned to it.



//Palindrome


const Palindrome = (str) => {
    
  let strLen = str.length;
  
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    
    if (str[0] === str[strLen - 1]) {
        return isPalindrome( str.slice(1, strLen - 1) );
    }
    
    return false;
};

console.log(Palindrome("blorg"));










