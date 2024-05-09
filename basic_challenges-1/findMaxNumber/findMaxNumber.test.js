const findMaxNumber = require('./findMaxNumber');

test('find max number', () => {
    expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
    expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
    expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
})