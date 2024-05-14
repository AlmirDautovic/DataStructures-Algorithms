const reverseString = require('./reverseString');

test('reverse string', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('JavaScript')).toBe('tpircSavaJ');
    expect(reverseString('12345')).toBe('54321');
})