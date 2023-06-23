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

// 118.Returning Strings

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

console.log(greet("Joy"));

// 119. Opposites Attract

function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0) {
    if (flower2 % 2 != 0) {
      return true;
    } else {
      return false;
    }
  } else if (flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(3, 2));

// 120. Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;

  if (input == null) {
    return [];
  } else if (!input.length) {
    return input;
  } else {
    input.filter((val) => {
      if (val > 0) {
        count++;
      } else {
        sum += val;
      }
    });
  }

  let a = [count, sum];

  return a;
}

console.log(countPositivesSumNegatives());

// 121. Convert a Boolean to a String

function booleanToString(b) {
  return b.toString();
}

console.log(booleanToString(true));

// 122. Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  if (/^r/i.test(name)) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo("Adam"));

// 123. Calculate average

function findAverage(array) {
  if (array == null || array.length == 0) {
    return 0;
  } else {
    let a = array.reduce((a, b) => a + b, 0);

    return a / array.length;
  }
}

console.log(findAverage([1, 2, 3]));

// 124. Beginner Series #1 School Paperwork

function paperwork(n, m) {
  return n < 0 ? 0 : m < 0 ? 0 : n * m;
}

console.log(paperwork(5, 5));

// 125.How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  let a = classPoints.reduce((a, b) => a + b, 0);

  return a / classPoints.length < yourPoints ? true : false;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

// 126.Sum Arrays

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum([1, 5.2, 4, 0, -1]));

// 127. Reversed Words

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("hello world!"));

// 128. MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

console.log(makeUpperCase("hello"));

// 129. Count by X

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }

  return z;
}

console.log(countBy(2, 5));

// 130. Find Maximum and Minimum Values of a List

var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// 131. Jenny's secret message

function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

// 132. Rock Paper Scissors!

const rps = (p1, p2) => {
  let t1 = "Player 1 won!";
  let t2 = "Player 2 won!";

  return p1 == "rock" && p2 == "scissors"
    ? t1
    : p2 == "rock" && p1 == "scissors"
    ? t2
    : p1 == "paper" && p2 == "scissors"
    ? t2
    : p2 == "paper" && p1 == "scissors"
    ? t1
    : p1 == "paper" && p2 == "rock"
    ? t1
    : p2 == "paper" && p1 == "rock"
    ? t2
    : "Draw!";
};

console.log(rps("rock", "scissors"));

// 133. Count the Monkeys!

function monkeyCount(n) {
  let a = [];

  for (let i = 1; i <= n; i++) {
    a.push(i);
  }

  return a;
}

console.log(monkeyCount(5));

// 134. Do I get a bonus?

function bonusTime(salary, bonus) {
  return bonus ? `£${salary * 10}` : `£${salary}`;
}

console.log(bonusTime(2, true));

// 137. Get Planet Name By ID

function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
  }

  return name;
}

// 138. Grasshopper - Grade book

function getGrade(s1, s2, s3) {
  let a = (s1 + s2 + s3) / 3;

  return a >= 90
    ? "A"
    : a >= 80 && a < 90
    ? "B"
    : a >= 70 && a < 80
    ? "C"
    : a >= 60 && a < 70
    ? "D"
    : "F";
}

console.log(getGrade(95, 0, 3));

// 139. Remove exclamation marks

function removeExclamationMarks(s) {
  return s.replace(/!+/g, "");
}

console.log(
  removeExclamationMarks("wKiZRbvUpE!tWdtTzvTmJ pmONiDTgOL!HwUzlZdYjN")
);

// 140. Removing Elements

function removeEveryOther(arr) {
  let a = [];

  for (let i = 0; i <= arr.length - 1; i += 2) {
    a.push(arr[i]);
  }

  return a;
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 141. Correct the mistakes of the character recognition software

function correct(string) {
  return string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");
}

console.log(correct("VJVYENLTBH0000WP"));

// 142. Sentence Smash

function smash(words) {
  return words.join(" ");
}

console.log(smash(["hello", "world"]));

// 143. Powers of 2

function powersOfTwo(n) {
  let a = [];

  for (let i = 0; i <= n; i++) {
    a.push(Math.pow(2, i));
  }

  return a;
}

console.log(powersOfTwo(4));

// 144. You Can't Code Under Pressure #1

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}

// 145. Sum without highest and lowest number

function sumArray(array) {
  if (array == null) {
    return 0;
  }
  array = array.sort((a, b) => a - b);
  array.pop();
  array.shift();

  return array.reduce((a, b) => a + b, 0);
}

console.log(sumArray(null));

// 146. Fake Binary

function fakeBin(x) {
  return (x = x
    .split("")
    .map((val) => (val < 5 ? 0 : 1))
    .join(""));

  // for(let i=0;i<x.length;i++){
  //   if(x[i]<5){
  //     x[i]=0;
  //   }else{
  //     x[i]=1;
  //   }
  // }

  // return x.join('').toString();
}

console.log(fakeBin("45385593107843568"));

// 147. L1: Set Alarm

function setAlarm(employed, vacation) {
  return employed == true && vacation == false ? true : false;
}

// 148. km/h to cm/s (Beginner Series #4 Cockroach)

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778);
}

console.log(cockroachSpeed(1));

// 149. Is it a palindrome?

function isPalindrome(x) {
  x = x.toLowerCase();

  let word = "";

  for (let i = x.length - 1; i >= 0; i--) {
    word += x[i];
  }

  return x === word;
}

console.log(isPalindrome("abba"));

// 150. Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
  return numbers.filter((val) => val % divisor == 0);
}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));

// 151. Beginner Series #2 Clock (to milisecond)

function past(h, m, s) {
  return (h * 60 * 60 + m * 60 + s) * 1000;
}

console.log(past(0, 1, 1));

// 152. DNA to RNA Conversion

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("GACCGCCGCC"));

// 153. Get the mean of an array

function getAverage(marks) {
  let mark = marks.reduce((a, b) => a + b, 0);

  return Math.floor(mark / marks.length);
}

console.log(getAverage([2, 2, 2, 2, 3]));

// 154. Keep up the hoop

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

console.log(hoopCount(3));

// 155. Grasshopper - Check for factor

function checkForFactor(base, factor) {
  return base % factor == 0;
}

console.log(checkForFactor(9, 3));

// 156. Double Char

function doubleChar(str) {
  // let a = '';
  // str = str.split('').filter(val=>a+=val+val)
  // return a;

  return str
    .split("")
    .map((val) => val + val)
    .join("");
}

console.log(doubleChar("abcd"));

// 157. Parse nice int from char problem

function getAge(inputString) {
  return parseInt(inputString[0]);
}

console.log(getAge("4 years old"));

// 158. Welcome! (in different languages)

function greet(language) {
  const here = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  return here[language] == undefined ? "Welcome" : here[language];
}

console.log(greet("dutch"));

// 159. altERnaTIng cAsE <=> ALTerNAtiNG CaSe

function toAlternatingCase(string) {
  string = string.split("");

  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] == string[i].toUpperCase()) {
      string[i] = string[i].toLowerCase();
    } else {
      string[i] = string[i].toUpperCase();
    }
  }

  return string.join("");
}

console.log(toAlternatingCase("aaBBcc"));

// 160. Unfinished Loop - Bug Fixing #1

function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// 161. Grasshopper - Messi goals function

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 162. What is between?

function between(a, b) {
  let c = [];

  for (let i = a; i <= b; i++) {
    c.push(i);
  }

  return c;
}

// 163. Grasshopper - Debug sayHello

function sayHello(name) {
  return `Hello, ${name}`;
}

// 164. Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

// 165. Grasshopper - Terminal game move function

function move(position, roll) {
  return roll * 2 + position;
}

// 166. My head is at the wrong end!

function fixTheMeerkat(arr) {
  return arr.reverse();
}

console.log(fixTheMeerkat(["he", "she", "have"]));

// 167. Function 2 - squaring an argument

function square(s) {
  return Math.pow(s, 2);
}

// 168. N-th Power

function index(array, n) {
  if (array[n] == undefined) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

console.log(index([2, 2, 2], 2));

// 169. Grasshopper - If/else syntax debug

function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

// 170. Super Duper Easy (check if it is string and if not then multiply and add)

function problem(x) {
  if (typeof x == "string") {
    return "Error";
  } else {
    return x * 50 + 6;
  }
}

console.log(problem(1));

// 171. Vowel remover

function shortcut(string) {
  return string.replace(/[aeiou]/gi, "");
}

console.log(shortcut("codewars"));

// 172. Stringy Strings

function stringy(size) {
  let ans = "";

  if (size % 2 == 0) {
    for (let i = 1; i <= size / 2; i++) {
      ans += "10";
    }
  } else if (size == 1) {
    ans += "1";
  } else {
    for (let i = 1; i <= size / 2; i++) {
      ans += "10";
    }
    ans += "1";
  }

  return ans;
}

console.log(stringy(1));

// 173. Training JS #1: create your first JS function and print "Hello World!"

function helloWorld() {
  var str = "Hello World!";

  console.log(str);
}

// 174. What's the real floor? (in america ground floor is added and no 13th floor)

function getRealFloor(n) {
  return n <= 0 ? n : n > 0 && n < 13 ? n - 1 : n - 2;
}

// 175. Name Shuffler

function nameShuffler(str) {
  return str.replace(/(\w+)\s(\w+\W*\w+)/, "$2 $1");
}

console.log(nameShuffler("William Brien"));

// 176. Reverse List Order

function reverseList(list) {
  return list.reverse();
}

console.log(reverseList([1, 2, 3, 4]));

// 177. Grasshopper - Basic Function Fixer

function addFive(num) {
  var total = num + 5;
  return total;
}

// 178. Short Long Short

function solution(a, b) {
  return a.length > b.length ? b + a + b : a + b + a;
}

console.log(solution("2", "11"));

// 179. Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  return a == b ? false : true;
}

// 180. Reversing Words in a String

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("Hello World."));

// 181. Lario and Muigi Pipe Problem (sort by getting the lowest and highest from the array)

function pipeFix(numbers) {
  numbers = numbers.sort((a, b) => a - b);

  let fix = [];

  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    fix.push(i);
  }

  return fix;
}

console.log(pipeFix([1, 2, 3, 12]));

// 182. drink about (what to drink according to age)

function peopleWithAgeDrink(old) {
  return old < 14
    ? "drink toddy"
    : old < 18
    ? "drink coke"
    : old < 21
    ? "drink beer"
    : "drink whisky";
}

// 183. Grasshopper - Debug

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c > 0) return c + " is above freezing temperature";
  else return c + " is freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

console.log(weatherInfo(56));

// 184. Generate range of integers

function generateRange(min, max, step) {
  let ans = [];

  for (let i = min; i <= max; i += step) {
    ans.push(i);
  }

  return ans;
}

console.log(generateRange(2, 10, 2));

// 185. 101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number) {
  var dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  var respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number == 101
      ? dogs[3]
      : dogs[2];

  return respond;
}

// 186. Is this my tail?

function correctTail(body, tail) {
  var sub = body.substr(body.length - tail.length);

  if (sub == tail) {
    return true;
  } else {
    return false;
  }
}

// 187. Add Length

function addLength(str) {
  str = str.split(" ");

  let ans = [];

  for (let i = 0; i < str.length; i++) {
    ans.push(str[i] + " " + str[i].length);
  }

  return ans;
}

console.log(addLength("apple ban"));

// 188. String Templates - Bug Fixing #5

function buildString(...template) {
  // template = template.join(', ');
  // console.log(template)
  return `I like ${template.join(", ")}!`;
}

console.log(buildString("Cheese", "Milk", "Chocolate"));

// 189. Triple Trouble

function tripleTrouble(one, two, three) {
  let here = [one, two, three];
  let answer = "";

  for (let i = 0; i < here[0].length; i++) {
    for (let k = 0; k < here.length; k++) {
      answer += here[k][i];
    }
  }

  return answer;
}

console.log(tripleTrouble("burn", "reds", "roll"));

// 190. No zeros for heros

function noBoringZeros(n) {
  n = n.toString().replace(/0*$/, "");

  return +n;
}

// 191. Training JS #2: Basic data types--Number

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v6, //set number value to a
    b = v3; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v2, //set number value to a
    b = v3; //set number value to b
  return a % b;
}

// 192. get character from ASCII Value

function getChar(c) {
  return String.fromCharCode(c);
}

// 193. Training JS #4: Basic data types--Array

function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr

  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);

  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();

  return arr;
}

// 194. Fix your code before the garden dies!

function rainAmount(mm) {
  if (mm < 40) {
    return "You need to give your plant " + (40 - mm) + "mm of water";
  } else {
    return "Your plant has had more than enough water for today!";
  }
}

// 195. SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
  a = a.reduce((c, d) => c + Math.pow(d, 2), 0);
  b = b.reduce((e, f) => e + Math.pow(f, 3), 0);

  return a > b;
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));

// 196. Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

// 197. Grasshopper - Function syntax debugging

function main(verb, noun) {
  return verb + noun;
}

// 198. How many lightsabers do you own?

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// 199. Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  // let ans = [];

  // for(let i=0; i<n; i++){
  //   ans.push(arr[i]);
  // }

  return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 4, 5], 3));

// 200. How old will I be in 2099?

function calculateAge(a, b) {
  if (b - a > 1) {
    return `You are ${b - a} years old.`;
  } else if (b - a == 1) {
    return `You are ${b - a} year old.`;
  } else if (b - a < -1) {
    return `You will be born in ${a - b} years.`;
  } else if (b - a == -1) {
    return `You will be born in ${a - b} year.`;
  } else if (b - a == 0) {
    return `You were born this very year!`;
  }
}

console.log(calculateAge(2001, 2000));

// 201. Find the Remainder

function remainder(n, m) {
  return n > m ? n % m : m % n;
}

console.log(remainder(0, 0));

// 202. Welcome to the City

function sayHello(name, city, state) {
  // let a = '';

  // name.filter(val=>a+=val+' ');

  // a = a.trim()

  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));

// 203. No Loops 2 - You only need one

function check(a, x) {
  return a.includes(x);
}

console.log(check([9, 2], 2));

// 204. How many stairs will Suzuki climb in 20 years?

function stairsIn20(s) {
  s = s.reduce((a, b) => a.concat(b), []).reduce((a, b) => a + b, 0);
  return s * 20;
}

console.log(
  stairsIn20([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

// 205. Grasshopper - Messi Goals (simple adding)

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// 206. L1: Bartender, drinks!

function getDrinkByProfession(param) {
  param = param.toLowerCase();

  const para = {
    jabroni: "Patron Tequila",
    "school counselor": "Anything with Alcohol",
    programmer: "Hipster Craft Beer",
    "bike gang member": "Moonshine",
    politician: "Your tax dollars",
    rapper: "Cristal",
  };

  if (para[param] == undefined) {
    return "Beer";
  } else {
    return para[param];
  }
}

console.log(getDrinkByProfession("pug"));
