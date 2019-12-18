const VALUES = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
const REGEX = /^M{0,3}((CD|D)?C{0,3})((XL|L)?X{0,3})((IV|IX|V)?I{0,3})$/;

const validate = (romanNumber) => {
    return REGEX.test(romanNumber);
};

const parse = (romanNumber) => {
    let sum = 0;

    for (let i = romanNumber.length - 1; i >= 0; i--){
        const currentValue = VALUES[romanNumber[i]];
        const previousValue = VALUES[romanNumber[i-1]];

        if (previousValue < currentValue){
            sum += currentValue - previousValue;
        } else {
            sum += currentValue;
        }
    }
    return sum;
};

export {validate, parse};