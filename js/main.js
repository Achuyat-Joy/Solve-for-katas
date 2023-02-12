// 1.reverse the word

function solution(str) {
  str = str.split("");

  let arr = [];

  str.filter((val) => {
    arr.unshift(val);
  });

  arr = arr.join("");

  return arr;
}

console.log(solution("word"));

// 2. number in descending order

function descendingOrder(n) {
  n = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");

  return parseInt(n);
}

console.log(descendingOrder(0));

// 3. add each digit of a number with given power increasing with every step and return if answer/number is positive else -1

function digPow(n, p) {
  let k = n
    .toString() //to split
    .split("") //taking in array
    .reduce((a, b) => a + Math.pow(b, p++), 0);

  return k % n == 0 ? k / n : -1;
}

console.log(digPow(46288, 3));

// 4. validate pin (4/6 digit number)

function validatePIN(pin) {
  let n = pin.split("");

  let len = n.length;
  let check = 0;

  if (len == 4 || len == 6) {
    for (let i = 0; i < len; i++) {
      if (/\d/.test(n[i])) {
        check++;
      }
    }
  }

  return (len == 4) & (check == 4) || (len == 6 && check == 6) ? true : false;
}

console.log(validatePIN("-1.234"));

// short approach learned:

function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

// 5. Even or Odd

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

console.log(even_or_odd(17));

// 6. Return negative

function makeNegative(num) {
  return num > 0 ? num * -1 : num;
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

function removeChar(str) {
  str = str.replace(/^./, "");

  str = str.replace(/.$/, "");

  return str;
}

// 9. Remove String Spaces

function noSpace(x) {
  return x.replace(/\s+/g, "");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

// 10. Square(n) Sum

function squareSum(numbers) {
  let result = 0;

  // for(let i = 0; i < numbers.length; i++){
  //   result += Math.pow(numbers[i],2);
  // }

  numbers = numbers.reduce((a, b) => a + Math.pow(b, 2), 0);

  return numbers;
}

console.log(squareSum([1, 2, 3]));

// 11. Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// 12.String repeat

function repeatStr(n, s) {
  return s.repeat(n);
}

// 13. Grasshopper - Summation (sum all the number from 1 till given number)

var summation = function (num) {
  let result = 0;

  for (let i = num; i > 0; i--) {
    result += i;
  }

  return result;
};

console.log(summation(8));

// 14. Counting sheep of boolean

function countSheeps(arrayOfSheep) {
  let result = 0;

  arrayOfSheep = arrayOfSheep.filter((val) => {
    if (val) {
      result++;
    }
  });

  return result;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// 15. Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    args = args.sort((a, b) => a - b);

    return args[0];
  }
}

// 16. Century from year

function century(year) {
  // if(year%100==0){
  //   return year/100
  // }else if(year%100>0){
  //   return Math.floor(year/100)+1;
  // }

  return year % 100 == 0
    ? year / 100
    : year % 100 > 0
    ? Math.floor(year / 100) + 1
    : 0;
}

// short approach:

Math.ceil(year / 100);

// 17. Gravity Flip

const flip = (d, a) => {
  if (d == "R") {
    a = a.sort((a, b) => a - b);
  } else if (d == "L") {
    a = a.sort((a, b) => b - a);
  }

  return a;
};

console.log(flip("L", [3, 2, 1, 2]));

// 18. check same case

function sameCase(a, b) {
  if (/[a-z]/.test(a)) {
    if (/[a-z]/.test(b)) {
      return 1;
    } else if (/[A-Za-z]/.test(b)) {
      return 0;
    } else {
      return -1;
    }
  } else if (/[A-Z]/.test(a)) {
    if (/[A-Z]/.test(b)) {
      return 1;
    } else if (/[A-Za-z]/.test(b)) {
      return 0;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}

console.log(sameCase(":", ":"));

// 19.quarter of year

const quarterOf = (month) => {
  // Your code here

  const quarter = {
    1: 1,
    2: 1,
    3: 1,
    4: 2,
    5: 2,
    6: 2,
    7: 3,
    8: 3,
    9: 3,
    10: 4,
    11: 4,
    12: 4,
  };

  // for(let val in quarter){
  //   if(val==month){
  return quarter[month];
  // }
  // }
};

console.log(quarterOf(11));

// shorter approach:

Math.ceil(month / 3);

// 20. Coefficients of the Quadratic Equation

function quadratic(x1, x2) {
  return [1, -x1 + -x2, x1 * x2];
}

console.log(quadratic(1, 1));

// 21. A wolf in sheep's clothing

function warnTheSheep(queue) {
  if (queue.indexOf("wolf") == queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${
      queue.length - (queue.indexOf("wolf") + 1)
    }! You are about to be eaten by a wolf!`;
  }
}

console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);

// 22. Closest elevator

function elevator(left, right, call) {
  return call == right
    ? "right"
    : (call !== left && (call - right == 1 || right - call == 1)) ||
      right == left
    ? "right"
    : "left";
}

console.log(elevator(2, 2, 0));

// 23.Total amount of points

function points(games) {
  let arr = [];

  games = games.filter((val) => {
    arr.push(val.split(":"));
  });

  let point = 0;

  arr = arr.filter((val) => {
    if (parseInt(val[0]) > parseInt(val[1])) {
      point += 3;
    } else if (parseInt(val[0]) == parseInt(val[1])) {
      point++;
    } else {
      point += 0;
    }
  });

  return point;
}

// 24. Distance of pillars

function pillars(numPill, dist, width) {
  if (numPill < 2) {
    return 0;
  } else {
    return dist * 100 * (numPill - 1) + width * (numPill - 2);
  }
}

console.log(pillars(11, 15, 30));

// 25. twice the age

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return sonYearsOld * 2 > dadYearsOld
    ? sonYearsOld * 2 - dadYearsOld
    : dadYearsOld - sonYearsOld * 2;
}

// 26.Sum of differences in array

function sumOfDifferences(arr) {
  arr = arr.sort((a, b) => b - a);

  let add = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      add += arr[i] - arr[i + 1];
    }
  }

  return add;
}

console.log(sumOfDifferences([-3, -2, -1]));

// 27. Draw stairs

function drawStairs(n) {
  let a = "";

  for (let i = 0; i < n; i++) {
    a += "I\n ";
    a += " ".repeat(i);
  }

  return a.trim();
}

console.log(drawStairs(3));

// 28. If you can't sleep, just count sheep!!

var countSheep = function (num) {
  let a = "";

  for (let i = 1; i < num + 1; i++) {
    a += `${i} sheep...`;
  }

  return a;
};

console.log(countSheep(3));

// 29.Student's Final Grade

function finalGrade(exam, projects) {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects >= 5
    ? 90
    : exam > 50 && projects >= 2
    ? 75
    : 0;
}

// 30.Area or Perimeter

const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : l * 2 + w * 2;
};

// 31.Multiplication table for number

function multiTable(number) {
  let ans = "";

  for (let i = 1; i < 11; i++) {
    ans += `${i} * ${number} = ${i * number}\n`;
  }

  return ans;
}

console.log(multiTable(5));

// 32. Cat years, Dog years

var humanYearsCatYearsDogYears = function (humanYears) {
  let h = humanYears;
  let c = 0;
  let d = 0;

  if (h == 1) {
    c = 15;
    d = 15;
  } else if (h == 2) {
    c = 24;
    d = 24;
  } else {
    c = 24;
    d = 24;

    for (let i = 3; i <= h; i++) {
      c += 4;
      d += 5;
    }
  }

  let arr = [h, c, d];

  return arr;
};

console.log(humanYearsCatYearsDogYears(10));

// 33. Multiple of index

function multipleOfIndex(array) {
  let arr = [];

  // console.log(array.length)

  for (let i = 0; i <= array.length; i++) {
    // console.log(i)
    if (array[i] % i == 0) {
      arr.push(array[i]);
    }
  }

  return arr;
}

console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));

// 34. Type of sum

function typeOfSum(a, b) {
  return typeof (a + b);
}

// 35. Array plus array (adding all the items of two array and returning the sum)

function arrayPlusArray(arr1, arr2) {
  arr1 = arr1.reduce((a, b) => a + b, 0);
  arr2 = arr2.reduce((a, b) => a + b, 0);

  return arr1 + arr2;
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// 36. Return the day (1-7 as the weekday names)

function whatday(num) {
  const day = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };

  return num > 0 && num <= 7
    ? day[num]
    : "Wrong, please enter a number between 1 and 7";
}

console.log(whatday(3));

// 37. Is he gonna survive? (return true if bullets are twice or more than dragons as it takes two bullets to kill a dragon)

function hero(bullets, dragons) {
  return dragons * 2 <= bullets;
}

console.log(hero(195, 92));

// 38. For Twins: 1. Types (check if the variable type matches with given type)

function typeValidation(variable, type) {
  return typeof variable == type;
}

console.log(typeValidation(42, "number"));

// 39. Reversed sequence

const reverseSeq = (n) => {
  let arr = [];

  for (let i = n; i > 0; i--) {
    arr.push(i);
  }

  return arr;
};

console.log(reverseSeq(5));

// 40. Sum The Strings

function sumStr(a, b) {
  if (a == "" && b == "") {
    return "0";
  } else if (a == "") {
    return b;
  } else if (b == "") {
    return a;
  } else {
    return (parseInt(a) + parseInt(b)).toString();
  }
}

console.log(sumStr("", "5"));

// short approaches:

one: function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

two: function sumStr(a, b) {
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}

// 41.Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - (a + b);
}

console.log(otherAngle(30, 60));

// 42.Calculate BMI

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);

  return bmi <= 18.5
    ? "Underweight"
    : bmi <= 25.0
    ? "Normal"
    : bmi <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(80, 1.8));

// 43.Beginner - Reduce but Grow (multiply all the numbers in the array)

function grow(x) {
  x = x.reduce((a, b) => a * b, 1);

  return x;
}

console.log(grow([1, 2, 3]));

// 44. Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
};

console.log(zeroFuel(60, 30, 3));

// 45. Switch it Up (write the number in string with switch case)

function switchItUp(number) {
  switch (number) {
    case 1:
      number = "One";
      break;
    case 2:
      number = "Two";
      break;
    case 3:
      number = "Three";
      break;
    case 4:
      number = "Four";
      break;
    case 5:
      number = "Five";
      break;
    case 6:
      number = "Six";
      break;
    case 7:
      number = "Seven";
      break;
    case 8:
      number = "Eight";
      break;
    case 9:
      number = "Nine";
      break;
    default:
      number = "Zero";
  }

  return number;
}

console.log(switchItUp(1));

// 46. Convert to Binary

function toBinary(n) {
  n = n.toString(2);

  return parseInt(n);
}

// 47. 5 without numbers!

function unusualFive() {
  return ["a", "b", "c", "d", "e"].length;
}

// 48. Count odd numbers below given number

function oddCount(n) {
  // let check = 0;

  // for(let i=n-1; i>0; i--){
  //   i%2>0?check++:check
  // }

  // return check;

  return Math.floor(n / 2);
}

console.log(oddCount(7));

// 49. Help the Elite Squad of Brazilian forces BOPE (determing the magazine number as given is the brand of gun and street number, each street needs 3 bullets)

function magNumber(info) {
  let name = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5,
  };

  let [a, b] = info;

  return Math.ceil((b * 3) / name[a]);
}

// 50. The Feast of Many Beasts (checking if the beast name and dish name starts and ends with the same letter or not)

function feast(beast, dish) {
  //beast = beast.split('');
  //dish = dish.split('');

  return (
    beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));

// 51. Find the first non-consecutive number

function firstNonConsecutive(arr) {
  // let newArr = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    // newArr.push(newArr[i]+1);

    // if(newArr[i]!=arr[i]){
    //   return arr[i];
    // }

    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i + 1];
    }
  }

  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));

// 52. The falling speed of petals

function sakuraFall(v) {
  return v <= 0 ? 0 : 400 / v;
}

console.log(sakuraFall(12.3));

// 53. Take the Derivative

function derive(coefficient, exponent) {
  let first = coefficient * exponent;

  let second = exponent - 1;

  return `${first}x^${second}`;
}

console.log(derive(7, 8));

// 54. Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  let result = 0;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
    case "/":
      result = value1 / value2;
      break;
  }

  return result;
}

console.log(basicOp("/", 4, 7));

// 55. Abbreviate a Two Word Name (only first letter of each word in capital)

function abbrevName(name) {
  return name.replace(/(\w)(\w*)(\s)(\w)(\w*)/, "$1.$4").toUpperCase();
}

console.log(abbrevName("P favuzzi"));

// 56. Find Multiples of a Number

function findMultiples(integer, limit) {
  let x = Math.floor(limit / integer);

  let result = [];

  for (let i = 1; i <= x; i++) {
    result.push(integer * i);
  }

  return result;
}

console.log(findMultiples(4, 27));

// 57. Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  arr2.filter((val) => {
    if (!arr1.includes(val)) {
      arr1.push(val);
    }
  });

  return arr1.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2]));

// 58. CSV representation of array

function toCsvText(array) {
  let ans = "";

  array.filter((val) => {
    val.filter((val2) => (ans += val2 + ","));
    ans = ans.replace(/,$/, "");
    ans += "\n";
  });

  ans = ans.replace(/\s$/, "");

  return ans;
}

console.log(
  toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34],
  ])
);

// short approach:

return array.join("\n");

// 59. Define a card suit

function defineSuit(card) {
  card = card.replace(/^\w*/, "");

  switch (card) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}

console.log(defineSuit("30♣"));

// 60. Potenciation (x to the power of y)

function power(x, y) {
  let result = 1;

  for (let i = y; i > 0; i--) {
    result *= x;
  }

  return result;
}

console.log(power(-1, 40));

// 61. Get Nth Even Number

function nthEven(n) {
  // let result = 0;

  // for(let i=1; i<n; i++){
  //   result+=2;
  // }

  // return result;

  return n * 2 - 2;
}

console.log(nthEven(1));

// 62. Who is going to pay for the wall? (return array with full name and short form of two letters)

function whoIsPaying(name) {
  // let arr = [name];

  // name = name.split('');

  // if(name.length>2){
  //   let ans = name.slice(0,2)
  //   ans = ans.join('');
  //   arr.push(ans)
  // }

  // return arr;

  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

// 63.Simple Fun #352: Reagent Formula (fill up the condition which is 1,2 can not be together, 3,4 can not be together, 5,6 must be together, 7/8 must be present)

function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) {
    return false;
  }

  if (formula.includes(3) && formula.includes(4)) {
    return false;
  }

  if (formula.includes(5)) {
    if (formula.includes(6)) {
      if (formula.includes(7) || formula.includes(8)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else if (formula.includes(6)) {
    if (formula.includes(5)) {
      if (formula.includes(7) || formula.includes(8)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  if (formula.includes(7) || formula.includes(8)) {
    return true;
  }

  return false;
}

console.log(isValid([1, 3]));

// 64. whose move? if last player wins then his move or other.

function whoseMove(lastPlayer, win) {
  if (lastPlayer == "white" && win == true) {
    return lastPlayer;
  } else if (lastPlayer == "white" && win == false) {
    return "black";
  } else if (lastPlayer == "black" && win == false) {
    return "white";
  } else {
    return lastPlayer;
  }
}

console.log(whoseMove("white", false));

// 65. Do you speak "English"? if english exist in the sentence

function spEng(sentence) {
  return /english/i.test(sentence);
}

console.log(spEng("jjhenGlish"));

// 66. Invert values

function invert(array) {
  // let arr = []

  //  array.map(val=>{
  //    if(val>=0){
  //      arr.push(-val)
  //    }else{
  //      arr.push(Math.abs(val))
  //    }
  //  })

  //  return arr;

  return array.map((val) => -val);
}

console.log(invert([1, -2, 3, -4, 5]));

// 67. Seats in Theater (how many seat will be disturbed)

function seatsInTheater(nCols, nRows, col, row) {
  let nc = nCols - (col - 1);
  let nr = nRows - row;

  return nc * nr;
}

console.log(seatsInTheater(16, 11, 5, 3));

// 68. Will there be enough space?

function enough(cap, on, wait) {
  return on + wait > cap ? on + wait - cap : 0;
}

console.log(enough(100, 50, 60));

// 69. Grasshopper - Terminal game combat function (return life remaining, if - then return 0)

function combat(health, damage) {
  return damage > health ? 0 : health - damage;
}

console.log(combat(100, 90));

// 70. Ensure question mark

function ensureQuestion(s) {
  if (s[s.length - 1] == "?") {
    return s;
  } else {
    return s + "?";
  }
}

console.log(ensureQuestion("Yes"));

// 71. Thinkful - Number Drills: Blue and red marbles

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let left = blueStart + redStart - (bluePulled + redPulled);

  return (blueStart - bluePulled) / left;
}

console.log(guessBlue(5, 5, 3, 2));

// 72.Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  if (current == "green") {
    return "yellow";
  } else if (current == "yellow") {
    return "red";
  } else {
    return "green";
  }
}

// 73. NBA full 48 minutes average

function pointsPer48(ppg, mpg) {
  if (ppg == 0 && mpg == 0) {
    return 0;
  }

  let x = (ppg / mpg) * 48;
  x = x.toFixed(1);
  return Number.parseFloat(x);
}

console.log(10, 10);

// 74. Simple Multiplication (multiply with 8 if even and with 9 if not)

function simpleMultiplication(number) {
  return number % 2 == 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(2));

// 75. Calculate Price Excluding VAT

function excludingVatPrice(price) {
  let x = 0;

  if (price === null) {
    return -1;
  } else {
    x = (price * 100) / 115;
  }

  x = x.toFixed(2);

  return +x;
}

console.log(excludingVatPrice(230));

// 76. Keep Hydrated! (0.5lt in 1hour)

function litres(time) {
  return Math.floor(time * 0.5);
}

console.log(litres(2));

// 77. simple calculator

function calculator(a, b, sign) {
  return sign == "+"
    ? a + b
    : sign == "-"
    ? a - b
    : sign == "*"
    ? a * b
    : sign == "/"
    ? a / b
    : "unknown value";
}

console.log(calculator(1, 2, "+"));

// 78. Find the position in alphabet

function position(letter) {
  let start = 65;

  letter = letter.toUpperCase();

  return `Position of alphabet: ${letter.charCodeAt() - 64}`;
}

console.log(position("Z"));

// 79. Find the Integral

function integrate(coefficient, exponent) {
  let newNumber = exponent + 1;

  let result = coefficient / newNumber;

  let answer = `${result}x^${newNumber}`;

  return answer;
}

console.log(integrate(3, 2));

// 80. USD => CNY (1usd = 6.75cny)

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

console.log(usdcny(5936));

// 81. Contamination #1 -String- (replace text with char, same length)

function contamination(text, char) {
  return char.repeat(text.length);
}

console.log(contamination("abc", ""));

// 82. FIXME: Replace all dots

var replaceDots = function (str) {
  console.log(str);
  return str.replace(/\./g, "-");
};

console.log(replaceDots("abc.abc.ds"));

// 83. Capitalization and Mutability

function capitalizeWord(word) {
  return word.replace(/^./g, (s) => s.toUpperCase());
}

console.log(capitalizeWord("word"));

// 84. Aspect Ratio Cropping - Part 1 (rounding resolution to 16:9)

function aspectRatio(x, y) {
  return [Math.ceil(y * (16 / 9)), y];
}

console.log(aspectRatio(640, 480));

// 85. Pythagorean Triple a^2+b^2 = c^2

function isPythagoreanTriple(integers) {
  integers = integers.sort((a, b) => a - b);

  let [d, e, f] = [...integers];

  return Math.pow(d, 2) + Math.pow(e, 2) == Math.pow(f, 2);
}

console.log(isPythagoreanTriple([4, 3, 5]));

// 86. 8kyu interpreters: HQ9+ (return according to input)

function HQ9(code) {
  if (code == "H") {
    return "Hello World!";
  } else if (code == "9") {
    return "99 bottles of beer on the wall, 99 bottles of beer.\nTake one down and pass it around, 98 bottles of beer on the wall.etc";
  } else if (code == "Q") {
    return code;
  } else {
    return undefined;
  }
}

console.log(HQ9("9"));

// 87. Find out whether the shape is a cube

var cubeChecker = function (volume, side) {
  console.log(volume, side);
  if (volume <= 0 || side <= 0) {
    return false;
  } else if (volume % side == 0) {
    let result = volume / side;
    if (result % Math.sqrt(result) == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log(cubeChecker(6400, 16));

// shortcut:

var cubeChecker = function (volume, side) {
  return Math.pow(side, 3) === volume && side > 0;
};

// 88. All Star Code Challenge #18 (check the number of given word occurance in the letter)

function strCount(str, letter) {
  if (str == "") {
    return 0;
  }

  let count = 0;

  str = str.split("");

  for (let i = 0; i < str.length; i++) {
    if (str[i] == letter) {
      count++;
    }
  }

  return count;
}

console.log(strCount("", "o"));

// shortcut:

str.split("letter").length;

// 89. Difference of Volumes of Cuboids (multiply array elements and deduct the difference between two arrays)

function findDifference(a, b) {
  a = a.reduce((a, b) => a * b, 1);
  b = b.reduce((a, b) => a * b, 1);

  return Math.abs(a - b);
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));

// 90. BASIC: Making Six Toast.

function sixToast(num) {
  return Math.abs(num - 6);
}

console.log(sixToast(3));

// 91. ES6 string addition

function joinStrings(string1, string2) {
  return `${string1} ${string2}`;
}

console.log(joinStrings("abc", "def"));

// 92. For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

var quote = function (fighter) {
  return /George Saint Pierre/i.test(fighter)
    ? "I am not impressed by your performance."
    : /conor mcgregor/i.test(fighter)
    ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
    : "problem";
};

console.log(quote("George Saint pIerre"));

// 93. Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

console.log(getVolumeOfCuboid(2, 2, 1));

// 94. Alan Partridge II - Apple Turnover

function apple(x) {
  return Math.pow(x, 2) > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

console.log(apple(50));

// 95. Alan Partridge I - Partridge Watch

function part(x) {
  let s = 0;
  let n = "Mine's a Pint";

  x.filter((val) => {
    if (/Partridge/i.test(val)) {
      s++;
      n += "!";
    } else if (/PearTree/i.test(val)) {
      s++;
      n += "!";
    } else if (/Chat/i.test(val)) {
      s++;
      n += "!";
    } else if (/Dan/i.test(val)) {
      s++;
      n += "!";
    } else if (/Toblerone/i.test(val)) {
      s++;
      n += "!";
    } else if (/Lynn/i.test(val)) {
      s++;
      n += "!";
    } else if (/AlphaPapa/i.test(val)) {
      s++;
      n += "!";
    } else if (/Nomad/i.test(val)) {
      s++;
      n += "!";
    }
  });

  return s > 0 ? n : "Lynn, I've pierced my foot on a spike!!";
}

console.log(
  part([
    "Grouse",
    "Partridge",
    "Pheasant",
    "Goose",
    "Starling",
    "Robin",
    "Thrush",
    "Emu",
    "PearTree",
    "Chat",
    "Dan",
    "Square",
    "Toblerone",
    "Lynn",
    "AlphaPapa",
    "BMW",
    "Graham",
    "Tool",
    "Nomad",
    "Finger",
    "Hamster",
  ])
);

// 96. Alan Partridge III - London

function part(x) {
  let arr = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
  ];

  x.filter((val) => {
    if (arr.includes(val)) {
      arr.splice(arr.indexOf(val), 1);
    }
  });

  return arr.length == 0
    ? "Smell my cheese you mother!"
    : "No, seriously, run. You will miss it.";
}

console.log(
  part([
    "Norwich",
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway",
    "London",
  ])
);

// 97. Age Range Compatibility Equation

function datingRange(age) {
  let min = 0;
  let max = 0;

  if (age <= 14) {
    min = Math.floor(age - 0.1 * age);
    max = Math.floor(age + 0.1 * age);
  } else {
    min = Math.floor(age / 2 + 7);
    max = Math.floor((age - 7) * 2);
  }

  return `${min}-${max}`;
}

console.log(datingRange(17));

// 98. Beginner - Lost Without a Map (double each element of the array)

function maps(x) {
  return x.map((val) => val * 2);
}

console.log(maps([1, 2, 3]));

// 99. Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
  return s.replace(/[aeiou]/gi, "!");
}

console.log(replace("aeioU"));

// 100. Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(string) {
  return string.replace(/!*$/gi, "");
}

console.log(remove("Hi!!!"));

// 102. Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
  return string.replace(/!$/, "");
}

console.log(string("Hi!"));

// 103. Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

function remove(string) {
  string = string.replace(/!*/gi, "");

  return string + "!";
}

console.log(remove("Hi!!!"));

// 104. Simple Comparison?

function add(a, b) {
  return a == b;
}

console.log(add("1", 1));

// 105. To square(root) or not to square(root)

function squareOrSquareRoot(array) {
  return array.map((val) => {
    return Math.sqrt(val) % 1 == 0 ? Math.sqrt(val) : Math.pow(val, 2);
  });
}

console.log(squareOrSquareRoot([1, 2, 3, 4]));

// 106. I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  const say = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    0: "not at all",
  };

  return say[nbPetals % 6];
}

console.log(howMuchILoveYou(5));

// 107. Sum Mixed Array

function sumMix(x) {
  return x.reduce((a, b) => a + parseInt(b), 0);
}

console.log(sumMix([9, 3, "7", "3"]));

// 108. You only need one - Beginner

function check(a, x) {
  return a.includes(x);
}

console.log(check([1, 2, 3, 4], 1));

// 108. You only need one - Beginner

function check(a, x) {
  return a.includes(x);
}

console.log(check([1, 2, 3, 4], 1));

// 109. Hello, Name or World!

function hello(name) {
  if (name == "" || name == undefined) {
    return `Hello, World!`;
  } else {
    name = name.toLowerCase();
    name = name.replace(/^./g, (s) => s.toUpperCase());
    return `Hello, ${name}!`;
  }
}

console.log(hello());

// 110. Well of Ideas - Easy Version

function well(x) {
  let count = 0;

  x.filter((val) => {
    if (val == "good") {
      count++;
    }
  });

  return count == 1
    ? "Publish!"
    : count == 2
    ? "Publish!"
    : count > 2
    ? "I smell a series!"
    : "Fail!";
}

console.log(well(["good", "good"]));

// 111. Filter out the geese

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let array = [...birds];

  for (let i = 0; i < birds.length; i++) {
    for (let j = 0; j < geese.length; j++) {
      if (birds[i] == geese[j]) {
        array.splice(array.indexOf(birds[i]), 1);
      }
    }
  }
  return array;
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);

// 112. Convert a string to an array

function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("Robin Singh"));

// 113. String cleaning

function stringToArray(string) {
  return string.replace(/[0-9]/g, "");
}

console.log(stringToArray("65151"));

// 114. Is there a vowel in there?

function isVow(a) {
  for (let i = 0; i < a.length; i++) {
    if (
      String.fromCharCode(a[i]) == "a" ||
      String.fromCharCode(a[i]) == "e" ||
      String.fromCharCode(a[i]) == "i" ||
      String.fromCharCode(a[i]) == "o" ||
      String.fromCharCode(a[i]) == "u"
    ) {
      a[i] = String.fromCharCode(a[i]);
    }
  }

  return a;
}

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);

// 115. The Wide-Mouthed frog!

function mouthSize(animal) {
  return /alligator/i.test(animal) ? "small" : "wide";
}

console.log(mouthSize("ad"));

// 116. Is n divisible by x and y?

function isDivisible(n, x, y) {
  if (n % x == 0) {
    if (n % y == 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(isDivisible(3, 3, 4));

// 117. Convert number to reversed array of digits

function digitize(n) {
  return n.toString().split("").map(Number).reverse();
  // let a = []

  // for(let i = n.length-1; i>=0; i--){
  //   a.push(+n[i]);
  // }

  // return a;
}

console.log(digitize(54321));
