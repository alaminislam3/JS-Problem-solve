/* Problem one :
Write a function that takes a string and returns it reversed. */
// function reverseString (str){

//   let arr = str.split("");
//   let reversedArr = arr.reverse()
//   let reverseStr = reversedArr.join("")
//   return reverseStr
// }
// console.log(reverseString("Hand"));

/* problem 2 :
Write a function that counts how many vowels (a, e, i, o, u) are in a given string. */

// function countVowels(check){
//   const vowels = 'aeiou'
//   let count = 0
//   const lower = check.toLowerCase()

//   for (let i = 0; i < lower.length ; i++){
//     const x = lower[i];
//     if(vowels.includes(x)){
//       count++;
//     }
//   }
//   return count
// }
// console.log(countVowels("ABCDEF"));


/* problem 3 :
Write a function that checks if a string is a palindrome (reads the same forward and backward).*/
// function palindrome (word){
//     let main = word
//     let splitIt = main.split("")
//     let reverseIt = splitIt.reverse() 
//     let result = reverseIt.join("")
    
//     if(main == result){
//       return true
//     }
//     else return false
// }
// console.log(palindrome("tom"));         


/* problem 4 :
Write a function that takes an array of numbers and returns the largest number.  */
// function findMax (arr){
//   let max = arr[0];
//   for (let i= 1; i < arr.length; i++){
//     if (arr[i]> max){
//         max = arr[i];
//     }
//   }
// return max
// }
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
console.log(removeDup([1,2,34,54,6,54,6,7]));

/* problem 6 Sum of All numbers in an array */

