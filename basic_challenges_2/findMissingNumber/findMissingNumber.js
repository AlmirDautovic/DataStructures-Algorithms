function findMissingNumber(arr) {
    if (arr.length === 0) {
        return 1;
    }

    if (!arr) {
        return undefined;
    }

    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;

    let acctualSum = 0;

    for (let i = 0; i < arr.length; i++) {
        acctualSum += arr[i];
    }

    return expectedSum - acctualSum;
}

module.exports = findMissingNumber;