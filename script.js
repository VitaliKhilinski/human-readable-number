function toReadable(number) {
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
  if (number === 0) {
    return "zero";
  }
  if (number < 0) {
    return "number must be more than 0";
  }
  if (number < 20) {
    return ones[number];
  }
  if (num.length === 2) {
    return tens[num[0]] + " " + ones[num[1]];
  }

  ////>100//////////////

  if (num.length == 3) {
    if (num[1] === "0" && num[2] === "0") return ones[num[0]] + " hundred";
    else return ones[num[0]] + "hundred and " + toReadable(+(num[1] + num[2]));
  }

  if (num.length === 4) {
    let finish = +(num[1] + num[2] + num[3]);
    if (finish === 0) return ones[num[0]] + " thousand";
    if (finish < 100)
      return ones[num[0]] + " thousand and " + toReadable(finish);
    return ones[num[0]] + "thousand " + toReadable(finish);
  }
}
