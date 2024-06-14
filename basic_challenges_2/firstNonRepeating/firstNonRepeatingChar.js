function findFirstNonRepeatingChar(str) {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }


    return null;
}

// Solution 2
function findFirstNonRepeatingCharacter(str) {
    // Create a new map
    const charCount = new Map();

    // Loop through the string
    for (const char of str) {
        // If the map already has the current character, increment the count
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    // Loop through the string
    for (const char of str) {
        // If the count of the current character is 1, return the current character
        if (charCount.get(char) === 1) {
            return char;
        }
    }

    // If no characters are repeated, return null
    return null;
}
module.exports = findFirstNonRepeatingChar;