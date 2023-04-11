1=> Declare a variable firstname and initialize it with the value 'Lata'.

Solution: var firstname = 'Lata';
==============================================================
2=>Which value does x have after execution of the following code?
let x = 'Geeta';

Solution:'Geeta'
==============================================================

3=>Declare a variable flower and assign it the value 'rose'. Declare a second variable tree and assign it the value 'maple'.

Solution:let flower = 'rose';
let tree = 'maple';
==============================================================
4=>Which value does x have after execution of the following code?
let x = 'Tic';
x = 'Tac';
x = 'Toe';

Solution:'Toe'
==============================================================
5=>Which value does x have after execution of the following code?
let x = 'Laurel';
let y = 'Hardy';
let z = y;
y = x;
x = z;

Solution:'Hardy'
==============================================================
6=>Define a function hello that returns 'Hello world!'.

Solution:function hello(){
return 'Hello world!';
}
==============================================================
7=>Define two functions. The first function a should return 'Hello a!' and the second function b should return 'Hello b!'.

Solution:function a(){
return 'Hello a!';
}
function b(){
return 'Hello b!';
}
==============================================================
8=>1. Define a function greet returning the value 'Haydo!'.
2. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.

Solution:function greet(){
return 'Haydo!';
}
let salutation = greet();
==============================================================
9=>Which value does x have after execution of the following code?
function hello() {
  return 'Hi!';
}

let x = hello();
Solution:'Hi!'
==============================================================
10=>Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should return 'CO2'

Solution:function echo(name) {
  return name;
}
let result = echo('Greta');
==============================================================
11=>Which value does x have after execution of the following code?
function reply(phrase) {
  return phrase;
}

let x = reply('How do you do?');

Solution:'How do you do?'
==============================================================
12=>Write a function greet having one parameter and returning 'Hello <parameter>!'.

Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.
  
Solution:function greet(name){
return  'Hello ' + name + '!'
}
==============================================================
13=>Which value does x have after execution of the following code?
function whereIs(name) {
  return 'Where is ' + name + '?';
}

let x = whereIs('Jacky');

Solution:'Where is Jacky?'
==============================================================
14=>Which value does x have after execution of the following code?
function hi(name) {
  return 'Hi ' + name + '!';
}

let h1 = hi('Selva');
let h2 = hi('Pola');
let x = h1 + ' ' + h2;

Solution:'Hi Selva! Hi Pola!'
==============================================================
15=>Write a function log that logs 'Hello Console!'. If you are working with a desktop browser, open the developer tools to see the output there as well.

Solution:function log(){
console.log('Hello Console!')
}
==============================================================
16=>Write a function log, that takes a parameter and logs this parameter.

Example: log('Ken Thompson') should log 'Ken Thompson'.

Solution:function log(name){
console.log(name);
}
==============================================================
17=>Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.

Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.

Solution:function shout(word) {
  let result = word + word;
  console.log(result);
  return result;
}
shout('Fire');
==============================================================
18=>Which value does x have after execution of the following code?
function double(name) {
  return name + ' and ' + name;
}
let x = double('Roy');

Solution:'Roy and Roy'
==============================================================
19=>Which value does x have after execution of the following code?
let x = 'Tic';
x = x + 'Tac';
x = x + x;

Solution:'TicTacTicTac'
==============================================================
20=>Write a function length that takes a string and returns the number of characters of the string.

Example: length('sun') should return 3.

Solution:function length(n){
return n.length;
}
==============================================================
21=>Write a function toCase that takes a string and returns that string in lowercase and uppercase with - as delimiter.

Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.

Solution:function toCase(text){
return text.toLowerCase()+'-'+text.toUpperCase();
}
==============================================================
22=>Write a function shortcut that takes two strings and returns the initial letters of theses strings.

Example: shortcut('Amnesty', 'International') should return 'AI'.

Solution:function shortcut(x, y){
return  x.charAt(0) + y.charAt(0);
}
==============================================================
23=>Write a function firstChar, which returns the first character that is not a space when a string is passed.

Example: firstChar(' Rosa Parks ') should return 'R'.

Solution:function firstChar(a){
return a.trim().charAt(0);
}
==============================================================
24=>Write a function indexOfIgnoreCase taking two strings and determining the first occurrence of the second string in the first string. The function should be case insensitive.

Example: indexOfIgnoreCase('bit','it') and indexOfIgnoreCase('bit','IT') should return 1.

Solution:function indexOfIgnoreCase(a,b){

let x= a.toLowerCase();
let y = b.toLowerCase();
return x.indexOf(y);
}
==============================================================
25=>Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.

Solution:function secondIndexOf(a,b){

let x= a.indexOf(b);

return a.indexOf(b, x + 1);
}
==============================================================
26=>Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the first space.

Example: firstWord('see and stop') should return 'see'.

Solution:function firstWord(a){
let x=a.indexOf(' ');
return a.substr(0, x);
}
==============================================================
27=>Write a function normalize, that replaces '-' with '/' in a date string.

Example: normalize('20-05-2017') should return '20/05/2017'.

Solution:function normalize(a){
return a.replaceAll('-','/' )
}
==============================================================
28=>Write a function add that takes two numbers and returns their sum.

Example: add(1, 2) should return 3.

Solution:function add(a,b){
return a + b;
}
==============================================================
29=>Which value does x have after execution of the following code?
let x = 3;
x++;
x = x * 2;
x--;

Solution:7
==============================================================
30=>Write a function toFahrenheit that converts a temperature from Celsius to Fahrenheit.

Example: toFahrenheit(0) should return 32.

Solution:function toFahrenheit(temp){
return temp * 9/5 + 32;
}
==============================================================
31=>Write a function onesDigit that takes a natural number and returns the ones digit of that number.

Example: onesDigit(2674) should return 4.

Solution:function onesDigit(n){
return n % 10;
}
==============================================================
32=>Write a function mean that takes 2 numbers and returns their mean value.

Example: mean(1, 2) should return 1.5.

Solution:function mean(a,b){
return (a+b) /2
}
==============================================================
33=>Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.

Solution:function hypotenuse(a, b) {
  let c= Math.pow(a, 2) + Math.pow(b, 2);
  return Math.sqrt(c) ;
}
==============================================================
34=>Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

Solution:function midrange(a,b,c){
let min = Math.min(a,b,c)
let max = Math.max(a,b,c)
return (max+min) / 2
}
==============================================================
35=>Write a function area that calculates the area of a circle. The function is given the radius of the circle.

Example: area(1) should return p and area(2) should return 4 * p.

Solution:function area(r){
return A =(Math.PI) *r*r;
}
==============================================================
36=>Write a function round100 that rounds a number to the nearest hundred.

Example: round100(1749) should return 1700 and round100(856.12) should return 900.

Solution:function round100(n){
return Math.round(n/100) *100
}
==============================================================
37=>Write a function dice that returns like a dice a random number between 1 and 6.

Solution:function dice(){
return Math.floor(Math.random() *6) + 1
}
==============================================================
38=>Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

Example: add('102+17') should return 119.

Solution:function add(n) {
  let num1= parseInt(n, 10);
  let indexPlus = n.indexOf('+');
  let sAfterPlus = n.substr(indexPlus + 1);
  let num2= parseInt(sAfterPlus, 10);
  return num1+ num2;
}
==============================================================
39=>Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.

Solution:function nand(a,b){
let c = a && b;
return !c;
}
 nand(true, true)
==============================================================
40=>Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

Solution:function nor(a,b){
let c = !a && !b;
return c;
}
==============================================================
41=>Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false.

Solution:function xor(a,b){
return a !=b;
}
==============================================================
42=>Write a function equals that checks two values for strict equality.

Example: equals(1, 1) should return true and equals(1, 2) should return false.

Solution:function equals(a,b){
let x = a;
let y = b;
return x === y;
}
==============================================================
43=>Write a function equals that checks 3 values for strict equality. The function should only return true if all 3 values are equal.

Example: equals(1, 1, 1) should return true and equals(1, 2, 1) should return false.

Solution:function equals(a,b,c){
let x = a;
let y = b;
let z = c;
x=y;
y=z;
z=x;
return a===b && b===c;
}
==============================================================
44=>Write a function isEven that checks if a passed number is even. If the given number is even, true should be returned, otherwise false.

Example: isEven(2) should return true and isEven(3) should return false.

Solution:function isEven(n){
let  x = n % 2;
    return x === 0
}
==============================================================
45=>Write a function unequal that checks 3 values for strict inequality. The function should return true if all three parameters are strict unequal. Otherwise false.

Example: unequal(1, 2, 3) should return true and unequal(1, 1, 2) should return false.

Solution:function unequal(a,b,c){
return a !==b && b !==c && a !== c;
}
==============================================================
46=>Write a function isThreeDigit that checks if a number is greater than or equal to 100 and less than 1000.

Example: isThreeDigit(500) should return true and isThreeDigit(50) should return false.

Solution:function isThreeDigit(n){
return n >= 100 && n < 1000;
}
==============================================================
47=>Write a function equals that checks two values for strict equality. If the two values are equal, the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.

Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.

Solution:function equals(a,b){
if (a === b){
return 'EQUAL';
}
if(a !== b){
return 'UNEQUAL';
}
}
==============================================================
48=>Write a function repdigit that determines whether a two-digit decimal is a repdigit or not. If the decimal is a repdigit, 'Repdigit!' should be returned, otherwise 'No Repdigit!'.

Example: repdigit(22) should return 'Repdigit!' and repdigit(23) should return 'No Repdigit!'.

Solution:function repdigit(n) {
  let ones = n % 10;
  let tens = Math.floor(n / 10);
  if (ones === tens) {
    return 'Repdigit!';
  }
  return 'No Repdigit!';
}
==============================================================
49=>Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10, the surcharge is 2.

Example: addWithSurcharge(5, 15) should return 23.

Solution:function addWithSurcharge(a, b) {

  let surcharge = 0;

  if (a <= 10) {
    surcharge = surcharge + 1;
  } else {
    surcharge = surcharge + 2;
  }

  if (b <= 10) {
    surcharge = surcharge + 1;
  } else {
    surcharge = surcharge + 2;
  }

  return a + b + surcharge;
}
==============================================================
50=>Write a function addWithSurcharge that adds two amounts with surcharge. For each amount less than or equal to 10, the surcharge is 1. For each amount greater than 10 and less than or equal to 20, the surcharge is 2. For each amount greater than 20, the surcharge is 3.

Example: addWithSurcharge(10, 30) should return 44.


Solution:function addWithSurcharge(a, b) {

  let surcharge = 0;

  if (a <= 10) {
    surcharge = surcharge + 1;
  } 
   else if(a > 10 && a <= 20 ) {
    surcharge = surcharge + 2;
  }
   else{
  surcharge = surcharge + 3;
   }

  if (b <= 10) {
    surcharge = surcharge + 1;
  }
   else if(b > 10 && b <= 20 ) {
    surcharge = surcharge + 2;
  }
   else{
   surcharge = surcharge + 3;
   }

  return a + b + surcharge;
}
==============================================================
51=>Write a function toArray that takes 2 values and returns these values in an array.

Example: toArray(5, 9) should return the array [5, 9].

Solution:function toArray(a,b){
return c = [a,b]
}
==============================================================
52=>Write a function getFirstElement that takes an array and returns the first element of the array.

Example: getFirstElement([1, 2]) should return 1.

Solution:function getFirstElement(a){
return a[0];
}
==============================================================
53=>Write a function setFirstElement that takes an array and an arbitrary variable. The variable should be inserted as the first element in the array. The array should be returned.

Example: setFirstElement([1, 2], 3) should return [3, 2].

Solution:function setFirstElement(a,b){
a[0] = b;
return a;
}
==============================================================
54=>Write a function getLastElement that takes an array and returns the last element of the array.

Example: getLastElement([1, 2]) should return 2.

Solution:function getLastElement(a){
let b = a[a.length - 1];
return b
}
==============================================================
55=>Write a function sort that takes an array filled with 3 numbers and returns these 3 numbers sorted in ascending order as an array.

Example: sort([2, 3, 1]) should return [1, 2, 3].

Solution:function sort(a){
return a.sort();
}
==============================================================
56=>Write a function rotate that rotates the elements of an array. All elements should be moved one position to the left. The 0th element should be placed at the end of the array. The rotated array should be returned.

Example: rotate(['a', 'b', 'c']) should return ['b', 'c', 'a'].

Solution:function rotate(a){
let x = a.shift();
a.push(x);
return a;
}
==============================================================
57=>Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array.

Example: add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].

Solution:function add(a,b){
let c = a.indexOf(b);
if (c == -1){
a.push(b)
return a;
}else if (c == a.indexOf(b)){
    return a;
}
}
==============================================================
58=>Write a function concatUp that concatenate two arrays. The longer array should be appended to the shorter array. If both arrays are equally long, the second array should be appended to the first array.

Example: concatUp([1, 2], [3]) should return [3, 1, 2] and concatUp([5, 7], [6, 8]) should return [5, 7, 6, 8].

Solution:function concatUp(arr1,arr2){

if(arr2.length >= arr1.length) {
return  arr1.concat(arr2);
}else {
return arr2.concat(arr1);
}
}
==============================================================
59=>Write a function halve that copies the first half of an array. With an odd number of array elements, the middle element should belong to the first half.

Example: halve([1, 2, 3, 4]) should return [1, 2].


Solution:function halve(arr){
if((arr.length % 2) !==0){
return arr.slice(0,Math.ceil(arr.length/2));

}else{
return arr.slice(0,(arr.length/2));
}
}
==============================================================
60=>Write a function list that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'. An empty array should return an empty string.

Example: list(['Huey', 'Dewey', 'Louie']) should return 'Huey, Dewey and Louie'.

Solution:function list(words) {

  if (words.length === 0) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  let wordsExLast = words.slice(0, words.length - 1);
  let lastWord = words[words.length - 1];
  return wordsExLast.join(', ') + ' and ' + lastWord;
}
==============================================================
61=>Write a function flat that flattens a two-dimensional array with 3 entries.

Example: flat(loshu) should return [4, 9, 2, 3, 5, 7, 8, 1, 6]. Thereby loshu is the magic square from the example above.

Solution:function flat(loshu){
return loshu.flat();
}
==============================================================
62=>Write a function median that takes an array of ascending numbers and returns the median of that numbers.

Example: median([1, 2, 10]) should return 2 and median([1, 2, 10, 100]) should return 6.

Solution:function median(n){
n.sort((a,b)=> a-b);
if(n.length % 2 != 0){
var mid= n[Math.round((n.length -1) / 2)];
//var mid= n[Math.round((n.length - 1) / 2)];
return mid;
}
else if(n.length === 1){
return n[0];
}
else if(n.length%2 === 0){
let firsVal = n.slice(0,n.length/2);
let secondVal = n.slice(n.length/2,);
    //console.log(firsVal);
    //console.log(secondVal);
let val1 = firsVal[firsVal.length-1];
let val2 = secondVal[0];
return x =  (val1 + val2) / 2;
    //console.log(x);
}

}
==============================================================
63=>Write a function hello having one parameter and returning 'Hello <parameter>!'. If hello is called without an argument, 'Hello world!' should be returned.

Example: hello('Nala') should return 'Hello Nala!'.

Solution:function hello(x){
if(x === undefined){

return `Hello world!`;
 }else{
return `Hello ${x}!`;
}

}
==============================================================
64=>Write a function cutComment that takes one line of JavaScript and returns a possible line comment trimmed. If the line contains no line comment, null should be returned. For simplicity, we assume that the code does not contain the comment characters within a string.

Example: cutCommt('let foo; // bar') should return 'bar'.


Solution:function cutComment(s){
const commentIndex = s.search("//");
if(!s.includes("//")){
return null;

}else {
   let str = s.split(' ');
   let commIndex = str.indexOf("//");


   let afterComm = str.slice(commIndex + 1, str.length);
   return afterComm.toString();
}
}
==============================================================
65=>Write a function addTo that accepts a number as a parameter and adds all natural numbers smaller or equal than the parameter. The result is to be returned.

Example: addTo(3) should return 1+2+3 = 6.

Solution:function addTo(n){
let sum = 0
for(i = 0;i <= n;i++){
 sum  += i;
}
return sum
}
==============================================================
66=>Write a function factorial that calculates the factorial of a positive integer.

Example: factorial(3) should return 6.

Solution:function factorial(n){
let sum = 1;

for( i = 1;i <= n;i++){
 sum  *= i;
}

 return sum
}

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
==============================================================
67=>Write a function mean that accepts an array filled with numbers and returns the arithmetic mean of those numbers.

Example: mean([1, 2, 3]) should return (1+2+3)/3 = 2.

Solution:function mean(arr){
let sum = 0;
for(i = 0;i < arr.length;i++){
sum += arr[i];
}
return  sum/arr.length;
}
==============================================================
68=>Write a function spaces that takes a natural number n and returns a string of n spaces.

Example: spaces(1) should return ' '.

Solution:function spaces(n){
let text = ' ';
let result = text.repeat(n);
return result;
}
==============================================================
69=>Write a function lcm that takes two natural numbers and calculates their least common multiple (lcm). The lcm of two natural numbers a und b is the smallest natural number that is divisible by a and b.

Example: lcm(4, 6) should return 12.

Solution:
==============================================================
  
