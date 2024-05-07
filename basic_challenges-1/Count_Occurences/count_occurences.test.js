const countOccurences = require('./count_occurences');

test('count occurences of a letter', () => {
    expect(countOccurences('letter', 't')).toBe(2);
    expect(countOccurences('hello', 'a')).toBe(0);
    expect(countOccurences('programming', 'm')).toBe(2);
}) 