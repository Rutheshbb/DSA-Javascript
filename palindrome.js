var isPalindrome = function (x) {
  const reverse = x.toString().split("").reverse().join("");
  console.log(x.toString() === reverse);
  return x.toString() === reverse;
};

isPalindrome(1121);
