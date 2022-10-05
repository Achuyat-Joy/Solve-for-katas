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
