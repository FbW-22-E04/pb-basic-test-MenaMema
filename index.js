function nameOfCity(x) {
  if (x == x.slice(2)) {
    console.log(x);
  } else {
    console.log("The city name does not begin with Los or New");
  }
}
nameOfCity("Los Angeles", "Los");

console.log("--------------------");

function isDivisible(x) {
  const number = 100;

  if (x / number == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isDivisible(1);
isDivisible(100);

console.log("--------------------");

const isRaining = "Is it raining!"
  ? "_wet day - you need an umbrella_"
  : "_dry day - leave your umbrella at home_";

console.log(isRaining);

console.log("--------------------");

function geometricalSequence(num) {
  let result = num;
  console.log(result);
  for (i = 0; i <= 7; i++) {
    result = result * 2;
    console.log(result);
  }
}
geometricalSequence(1);

console.log("--------------------");

function multiplesOfThree(num) {
  let result = num;
  console.log(result);

  for (i = 0; i <= 3; i++) {
    result += 3;
    console.log(result);
  }
}
multiplesOfThree(3);
// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
