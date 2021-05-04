# Simple-Password-Checker
This is a simple lightweight easy to use password checking javascript library

### To check the password contains at least 1 number
#### checkNumbers(`password`)
```
checkNumbers("johndoe"); // false
checkNumbers("johndoe1"); // true
```
### To check the password contains at least 1 lowercase character
#### checkAlphabetsLowerCase(`password`)
```
checkAlphabetsLowerCase("123456789"); // false
checkAlphabetsLowerCase("123456789a"); // true
```
### To check the password contains at least 1 uppercase character
#### checkAlphabetsUpperCase(`password`)
```
checkAlphabetsUpperCase("johndoe"); // false
checkAlphabetsUpperCase("johnDoe"); // true
```
### To check the password contains at least 1 symbol
#### checkSymbols(`password`)
```
checkSymbols("johndoe"); // false
checkSymbols("john@doe"); // true
```
### To check the length of the password
#### checkLength(`password, minLength, maxLength`)
```
checkLength("johndoe", 8, 10); // false, password is smaller than 8 characters
checkLength("johndoe12345", 8, 10); // false, password is greater than 10 characters
checklength("johndoe12", 8, 10); // true
```
### To check that the password contains atleast a *number, symbol, uppercase, lowercase and the length*
#### superCheck(`password, minLength, maxLength`)
*using this function your users gonna have significantly strong password that no hacker would dare to crack.*
```
superCheck("john", 7, 10); // false, password is smaller than 7
superCheck("johndoeisverygoog", 7, 10); // false, password is greater than 10
superCheck("johndoe", 7, 10); // false, password does not contain a number
superCheck("johndoe1", 7, 10); // false, password does not contain a symbol
superCheck("john@doe1", 7, 10); // false, password does not contain an uppercase character
superCheck("JOHN@DOE1", 7, 10); // false, password does not contain a lowercase character
superCheck("john@Doe1", 7, 10); // true
```


