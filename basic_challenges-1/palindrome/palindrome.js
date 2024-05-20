// function isPalindrome(str) {
//     const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

//     const reversedStr = formatedStr.split('').reverse().join('');

//     return formatedStr === reversedStr;
// }

function isPalindrome(str) {
    const formattedStr = removeNonAlphanumeric(str.toLowerCase());

    const reversedStr = reverseStr(formattedStr);

    return formattedStr === reversedStr;
}


function removeNonAlphanumeric(str) {
    let formattedStr = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (isAlpanumeric(char)) {
            formattedStr += char;
        }
    }
    return formattedStr;
}

function isAlpanumeric(char) {
    const code = char.charCodeAt(0);

    return (
        (code >= 48 && code <= 57) || (code >= 97 && code <= 122)
    );
}

function reverseStr(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    return reversed;
}


module.exports = isPalindrome;