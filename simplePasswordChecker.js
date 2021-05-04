//This library is created by Ata Shaikh
//Contact Ata Shaikh - shaikhata666@gmail.com
//SimplePasswordChecker --version 1.0.1

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let alphabetsLC = "abcdefghijklmnopqrstuvwxyz".split("");
let alphabetsUC = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
let symbols = "~!@#$%^&*()_-+=*/|.,<>?:;[]{}".split("");

//Check numbers
function checkNumbers(password) {
  let splittedPassword = password.split("");
  return numbers.some((number) => splittedPassword.includes(number.toString()));
}

//Check lowercase
function checkAlphabetsLowerCase(password) {
  let splittedPassword = password.split("");
  return alphabetsLC.some((alpha) => splittedPassword.includes(alpha));
}

//Check uppercase
function checkAlphabetsUpperCase(password) {
  let splittedPassword = password.split("");
  return alphabetsUC.some((alpha) => splittedPassword.includes(alpha));
}

//Check symbols
function checkSymbols(password) {
  let splittedPassword = password.split("");
  return symbols.some((symbol) => splittedPassword.includes(symbol));
}

//Check length
function checkLength(password, minLength, maxLength) {
  return password.length < minLength || password.length > maxLength
    ? false
    : true;
}

//Check all - using this function your users gonna have significantly strong password that no hacker would dare to crack
function superChecker(password, minLength, maxLength) {
  let splittedPassword = password.split("");

  if (password.length < minLength) {
    return {
      message: `Password is smaller than ${minLength} characters.`,
      result: false,
    };
  }

  if (password.length > maxLength) {
    return {
      message: `Password is greater than ${maxLength} characters.`,
      result: false,
    };
  }

  let includeLC = alphabetsLC.some((alphaLC) =>
    splittedPassword.includes(alphaLC)
  );

  if (!includeLC) {
    return {
      message: "Password does not includes lowercase characters.",
      result: false,
    };
  }

  let includeUC = alphabetsUC.some((alphaUC) =>
    splittedPassword.includes(alphaUC)
  );

  if (!includeUC) {
    return {
      message: "Password does not includes uppercase characters.",
      result: false,
    };
  }

  let includeNum = numbers.some((number) =>
    splittedPassword.includes(number.toString())
  );

  if (!includeNum) {
    return {
      message: "Password does not includes numbers",
      result: false,
    };
  }

  let includeSymbol = symbols.some((symbol) =>
    splittedPassword.includes(symbol)
  );

  if (!includeSymbol) {
    return {
      message: "Password does not include symbols",
      result: false,
    };
  }

  return {
    message: "Password matched all criterias",
    result: true,
  };
}

module.exports = {
  checkNumbers,
  checkAlphabetsLowerCase,
  checkAlphabetsUpperCase,
  checkSymbols,
  checkLength,
  superChecker,
};
