function toReadable(number) {
    let result = "";
    let ones = [
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
    let tens = [
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
    let num = number.toString();
    if (number === 0 || number == "") {
        return "zero";
    }
    if (number < 0) {
        result = "number must be more than 0";
    }
    if (number < 20) {
        result = ones[number];
    }
    if (num.length === 2 && number >= 20) {
        result = tens[num[0]] + " " + ones[num[1]];
    }

    ////>100//////////////

    if (num.length == 3) {
        if (num[1] === "0" && num[2] === "0") {
            result = ones[num[0]] + " hundred";
        } else {
            result =
                ones[num[0]] +
                " " +
                "hundred " +
                toReadable(+(num[1] + num[2]));
        }
    }

    if (num.length === 4) {
        let finish = +(num[1] + num[2] + num[3]);
        if (finish === 0) {
            result = ones[num[0]] + " thousand";
        }
        if (finish < 100) {
            result = ones[num[0]] + " " + "thousand " + toReadable(finish);
        }
        result = ones[num[0]] + "thousand " + toReadable(finish);
    }
    return result.trim();
}

console.log(toReadable(""));

module.exports = toReadable;

////nine hundred ninety eight
