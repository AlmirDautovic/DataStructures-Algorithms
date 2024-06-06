function areAllCharsUnique(str) {
    const charSet = new Set();

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }

    return true;
}

// function areAllCharsUnique(str) {
//     const charCount = {};

//     for (let i = 0; i < str.length; i++) {
//         const char = str[i];

//         if (charCount[char]) {
//             return false;
//         }

//         charCount[char] = true;
//     }

//     return true;
// }

module.exports = areAllCharsUnique;