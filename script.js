var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return `You need to provide this function with two numbers.`;
  } else if (typeof num2 !== "number") {
    return `You need to provide this function with two numbers.`;
  }
  return num1 * num2;
};

console.log(multiply(2, 2));