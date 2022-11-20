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
