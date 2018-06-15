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


//Digit Sum:

const sumDigits = (num) => {
  
  let numString = num.toString(); 
  
  let starting = 0;
  
  let sum = 0;
  
  if (num < 0) { 
    sum -= Number(numString[1]); 
    starting += 2;
  }
  
  for (let i = 0; i < numString.length; i++) { 
    sum += Number(numString[i]); 
  }
  
  return sum;
}

console.log(sumDigits(145)); 



//Pythagoras:


const calculateSide = (sideA, sideB) => {
  

   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));


}

console.log(calculateSide(4, 3));


//




















