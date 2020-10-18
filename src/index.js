const decimal = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
const dozens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];

const toReadableTens = (num) => {
    if (num < 10) return decimal[num];
    else if (num >= 10 && num < 20) return dozens[num - 10];
    else {
        return tens[Math.floor(num / 10)] + " " + decimal[num % 10];
    }
};

module.exports = function toReadable(number) {
    let result = "";

    if (number >= 100) {
        result =
            decimal[Math.floor(number / 100)] +
            " hundred " +
            toReadableTens(number % 100);
    } else {
        result = toReadableTens(number);
    }

    return number === 0 ? "zero" : result.trim();
};
