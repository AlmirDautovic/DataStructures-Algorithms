const validateEmail = require('./validateEmail');

const result1 = validateEmail('john@gmail.com');
const result2 = validateEmail('john@gmail')

console.log(result1);
console.log(result2);
