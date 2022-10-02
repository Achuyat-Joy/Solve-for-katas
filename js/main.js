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