function isPalindrome(str) {
    const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedStr = formatedStr.split('').reverse().join('');

    return formatedStr === reversedStr;
}


module.exports = isPalindrome;