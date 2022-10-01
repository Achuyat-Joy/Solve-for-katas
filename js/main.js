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