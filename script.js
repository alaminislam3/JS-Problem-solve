/* Problem one :
Write a function that takes a string and returns it reversed. */
function reverseString (str){

  let arr = str.split("");
  let reversedArr = arr.reverse()
  let reverseStr = reversedArr.join("")
  return reverseStr
}
// console.log(reverseString("Hand"));

/* problem 2 :
Write a function that counts how many vowels (a, e, i, o, u) are in a given string. */

function countVowels(check){
  const vowels = 'aeiou'
  let count = 0
  const lower = check.toLowerCase()

  for (let i = 0; i < lower.length ; i++){
    const x = lower[i];
    if(vowels.includes(x)){
      count++;
    }
  }
  return count
}
// console.log(countVowels("ABCDEF"));


/* problem 3 :
Write a function that checks if a string is a palindrome (reads the same forward and backward).*/
function palindrome (word){
    let main = word
    let splitIt = main.split("")
    let reverseIt = splitIt.reverse() 
    let result = reverseIt.join("")
    
    if(main == result){
      return true
    }
    else return false
}
// console.log(palindrome("tom"));         


/* problem 4 :
Write a function that takes an array of numbers and returns the largest number.  */
function findMax (arr){
  let max = arr[0];
  for (let i= 1; i < arr.length; i++){
    if (arr[i]> max){
        max = arr[i];
    }
  }
return max
}
// console.log(findMax([2,4,6,8]));

/* problem 5 :
Write a function that removes all duplicate numbers from an array.  */

function removeDup (numbers){
  let unique = [];
  // let total = numbers
  for (let i=0; i< numbers.length; i++){
       if (!unique.includes(numbers[i])) {
         unique.push(numbers[i])
       }
  }
  return unique
}
// console.log(removeDup([1,2,34,54,6,54,6,7]));

/* problem 6 Sum of All numbers in an array */

function sumArray (numbers){
  let sum = 0
  for (let i=0 ; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum ;
}
// console.log(sumArray([2,43,2,3,43]));

/* Problem 7: Find Even Numbers in an Array */
 function findEven (num){
   let even = []
   for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (num[i] % 2 ===0){
      even.push(element)
    }
   }
   return even
}
// console.log(findEven([1,2,4,6]));

/* Problem 8: Capitalize First Letter of Each Word */

function capitalWord(str){
  return str
    .split(" ")                             
    .map(word => word[0].toUpperCase() + word.slice(1)) 
    .join(" ");                              
}       
// console.log(capitalWord("hello world"));  

/*  Problem 9: Find the Factorial of a Number
Write a function that calculates the factorial of a number using a loop. */

function  factorial (n){
  let result =1
  for(let i=1; i<=n  ; i++) {
    result = result * i;
  }
  return result
}
// console.log(factorial(5));

/* Problem 10: PingPong Challenge */
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {   
      console.log("PingPong");
    } else if (i % 3 === 0) {           
      console.log("Ping");
    } else if (i % 5 === 0) {           
      console.log("Pong");
    } else {
      console.log(i);                   
    }
  }
}

pingPong();
