const countVowels = require('./countVowels');

test('Count vowels in str', () => {
    expect(countVowels('Hello, World!')).toBe(3);
    expect(countVowels('JavaScript')).toBe(3);
    expect(countVowels('OpenAI Chatbot')).toBe(6);
    expect(countVowels('Coding Challenge')).toBe(5);
});