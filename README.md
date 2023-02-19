# Simple-Password-Checker

This is a simple lightweight easy to use password checking javascript library

### How to import

```
// for node
const simplePasswordChecker = require("simplepasswordchecker")

// for react
import simplePasswordChecker from "simplepasswordchecker

// using object destructuring
// for node
const {checkNumbers, checkAlphabetsLowerCase} = require("simplepasswordchecker")

// for react
import {checkNumbers, checkAlphabetsLowerCase} from "simplepasswordchecker
```

### All the methods of simplepasswordchecker

```
checkNumbers()
checkAlphabetsLowerCase()
checkAlphabetsUpperCase()
checkSymbols()
checkLength()
checkLength()
superCheck()

```

### To check the password contains at least 1 number

#### checkNumbers(`password`)

```
// for node
const {checkNumbers} = require("simplepasswordchecker")

// for react
import {checkNumbers} from "simplepasswordchecker

checkNumbers("johndoe"); // false
checkNumbers("johndoe1"); // true
```

### To check the password contains at least 1 lowercase character

#### checkAlphabetsLowerCase(`password`)

```
// for node
const {checkAlphabetsLowerCase} = require("simplepasswordchecker")

// for react
import {checkAlphabetsLowerCase} from "simplepasswordchecker

checkAlphabetsLowerCase("123456789"); // false
checkAlphabetsLowerCase("123456789a"); // true
```

### To check the password contains at least 1 uppercase character

#### checkAlphabetsUpperCase(`password`)

```
// for node
const {checkAlphabetsUpperCase} = require("simplepasswordchecker")

// for react
import {checkAlphabetsUpperCase} from "simplepasswordchecker

checkAlphabetsUpperCase("johndoe"); // false
checkAlphabetsUpperCase("johnDoe"); // true
```

### To check the password contains at least 1 symbol

#### checkSymbols(`password`)

```
// for node
const {checkSymbols} = require("simplepasswordchecker")

// for react
import {checkSymbols} from "simplepasswordchecker

checkSymbols("johndoe"); // false
checkSymbols("john@doe"); // true
```

### To check the length of the password

#### checkLength(`password, minLength, maxLength`)

```
// for node
const {checkLength} = require("simplepasswordchecker")

// for react
import {checkLength} from "simplepasswordchecker

checkLength("johndoe", 8, 10); // false, password is smaller than 8 characters
checkLength("johndoe12345", 8, 10); // false, password is greater than 10 characters
checklength("johndoe12", 8, 10); // true
```

### To check that the password contains atleast a _number, symbol, uppercase, lowercase and the length_

#### superCheck(`password, minLength, maxLength`)

_using this function your users gonna have significantly strong password that no hacker would dare to crack._

```
// for node
const {superCheck} = require("simplepasswordchecker")

// for react
import {superCheck} from "simplepasswordchecker

superCheck("john", 7, 10); // false, password is smaller than 7
superCheck("johndoeisverygood", 7, 10); // false, password is greater than 10
superCheck("johndoe", 7, 10); // false, password does not contain a number
superCheck("johndoe1", 7, 10); // false, password does not contain a symbol
superCheck("john@doe1", 7, 10); // false, password does not contain an uppercase character
superCheck("JOHN@DOE1", 7, 10); // false, password does not contain a lowercase character
superCheck("john@Doe1", 7, 10); // true
```
