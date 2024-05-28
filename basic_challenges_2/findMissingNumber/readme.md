# Challenge: Find The Missing Number

## Instructions

Write a function called `findMissingNumber` that takes in an array of unique numbers from 1 to n (inclusive), where one number is missing. It should return the missing number.

### Function Signature

```js
/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr: number[]): number;
```

### Examples

```js
findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]); // 5
findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]); // 9
findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]); // 7
```

### Constraints

- If an empty array is passed in, it should return `1`
- If nothing is passed in, it should return `undefined`

### Test Cases

```js
test('Finding the missing number', () => {
  expect(findMissingNumber([1, 2, 3, 5])).toBe(4);
  expect(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1])).toBe(9);
  expect(findMissingNumber([1, 3, 4, 5, 6])).toBe(2);
});
```
