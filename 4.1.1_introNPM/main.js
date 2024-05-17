const numberToText = require('number-to-text');
require('number-to-text/converters/en-us');

let textNumber = numberToText.convertToText(112346);

let textNumber2 = numberToText.convertToText("12346");

console.log(textNumber);
console.log(textNumber2);