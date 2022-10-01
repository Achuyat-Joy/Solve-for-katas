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