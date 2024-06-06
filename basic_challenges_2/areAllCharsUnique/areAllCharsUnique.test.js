const areAllCharsUnique = require('./areAllCharsUnique');

test('Unique Characters in a String', () => {
    expect(areAllCharsUnique('abcdefg')).toBe(true);
    expect(areAllCharsUnique('abcdefgA')).toBe(true);
    expect(areAllCharsUnique('programming')).toBe(false);
    expect(areAllCharsUnique('')).toBe(true);
    expect(areAllCharsUnique('a')).toBe(true);
});