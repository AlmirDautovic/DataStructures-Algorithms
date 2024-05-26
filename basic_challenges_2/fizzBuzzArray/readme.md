# Challenge: FizzBuzz Array

## Instructions

In this challenge, write a function called `fizzBuzzArray` that takes in a number and returns an array. The array should contain all the numbers from 1 to the number passed in. However, if the number is divisible by 3, you should replace the number with "Fizz". If the number is divisible by 5, you should replace the number with "Buzz". If the number is divisible by both 3 and 5, you should replace the number with "FizzBuzz".

### Function Signature

```js
/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(num: number): any[];
```

### Examples

```js
fizzBuzzArray(5); // [1, 2, "Fizz", 4, "Buzz"]
fizzBuzzArray(15); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

### Constraints

- The number passed in will always be greater than 0
- The number passed in will always be an integer

### Test Cases

```js
test('FizzBuzz Array', () => {
  expect(fizzBuzzArray(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ]);
});
```