// 1.reverse the word

function solution(str){
  str = str.split('');
  
  let arr = [];

  str.filter(val=>{
    arr.unshift(val);
  })

  arr = arr.join("");

  return arr;
}

console.log(solution('word'))


// 2. number in descending order

function descendingOrder(n){

  n = n
  .toString()
  .split('')
  .sort((a,b)=>b-a)
  .join('');

  return parseInt(n);
}

console.log(descendingOrder(0))


// 3. add each digit of a number with given power increasing with every step and return if answer/number is positive else -1

function digPow(n, p){

  let k = n
  .toString() //to split
  .split('') //taking in array
  .reduce((a,b)=>a+Math.pow(b,p++),0)

  return (k%n==0? k/n : -1);

}

console.log(digPow(46288, 3))


// 4. validate pin (4/6 digit number) 

function validatePIN (pin) {

  let n = pin
  .split('')

  let len = n.length
  let check = 0;

  if(len==4 || len == 6 ){
    for(let i = 0; i<len; i++){
    if(/\d/.test(n[i])){
      check++;
    }
  }
  }
  
  return (len==4 & check==4 || len==6 && check==6? true : false);

}

console.log(validatePIN ("-1.234"))

// short approach learned: 

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}


// 5. Even or Odd

function even_or_odd(number) {
  
  return(number%2 == 0 ? 'Even' : 'Odd');

}

console.log(even_or_odd(17))


// 6. Return negative

function makeNegative(num) {
  return (num>0? num*-1 : num);
}

console.log(makeNegative(-9));

// short approach:

function makeNegative(num) {
  return -Math.abs(num);
}


// 7. Convert a Number to a String! 

function numberToString(num) {
  return num.toString();
}



// 8. Remove First and Last Character

function removeChar(str){
 str = str.replace(/^./,'');
  
  str = str.replace(/.$/,'');
  
  return str;

};


// 9. Remove String Spaces

function noSpace(x){
    
  return x.replace(/\s+/g,'');
}


console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'));


// 10. Square(n) Sum

function squareSum(numbers){
  
  let result = 0;
  
  // for(let i = 0; i < numbers.length; i++){
  //   result += Math.pow(numbers[i],2);
  // }

  numbers = numbers.reduce((a,b)=>a+Math.pow(b,2),0)
  
  return numbers;
}

console.log(squareSum([1,2,3]));


// 11. Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
  
  return (bool ? 'Yes' : 'No')
}


// 12.String repeat

function repeatStr (n, s) {
  return s.repeat(n);
}


// 13. Grasshopper - Summation (sum all the number from 1 till given number)

var summation = function (num) {

  let result = 0;

  for(let i = num; i>0 ; i--){
    result+=i;
  }
  
  return result;
}

console.log(summation(8));


// 14. Counting sheep of boolean

function countSheeps(arrayOfSheep) {
  
  let result = 0;

  arrayOfSheep = arrayOfSheep.filter(val=>{
    if(val){
      result++;
    }
  })

  return result;
}

console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]));

