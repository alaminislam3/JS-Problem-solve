function reverseString (str){

  let arr = str.split("");
  let reversedArr = arr.reverse()
  let reverseStr = reversedArr.join("")
  return reverseStr
}

const input = document.getElementById("inputString")
const button = document.getElementById("reverseBtn")
const output = document.getElementById("output")

button.addEventListener("click", function(){

  const userinput = input.value;
  const reversed = reverseString(userinput)
  output.textContent = reversed

})