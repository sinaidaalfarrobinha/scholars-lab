function calculateGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function findFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function sumOfDigits(number) {
    let sum = 0;
    while (number > 0) {
        sum += Math.floor(number % 10);
        number = Math.floor(number / 10);
    }
    return sum;
}
