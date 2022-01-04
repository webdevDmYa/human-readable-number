module.exports = function toReadable(number) {
    number = number.toString();

    if (number.length == 1) {
        return zeroToNine(number[0]);
    }

    if (Number(number) % 10 == 0 && number.length == 2) {
        return from10To90(number);
    }

    if (number.length == 2 && number[0] == 1) {
        return from11to19(number);
    }

    if (number.length == 2 && number[0] !== 1) {
        return `${from20to90(number[0])} ${zeroToNine(number[1])}`;
    }

    if (Number(number) % 100 == 0 && number.length == 3) {
        return `${zeroToNine(number[0])} hundred`;
    }

    if (number.length == 3 && number[2] == 0) {
        return `${zeroToNine(number[0])} hundred ${from20to90(number[1])}`;
    }

    if (number.length == 3 && number[2] !== 0 && number[1] == 1) {
        return `${zeroToNine(number[0])} hundred ${from11to19(
            number[1] + number[2]
        )}`;
    }

    if (
        number.length == 3 &&
        number[2] !== 0 &&
        number[1] !== 1 &&
        number[1] == 0
    ) {
        return `${zeroToNine(number[0])} hundred ${zeroToNine(number[2])}`;
    }
    if (
        number.length == 3 &&
        number[2] !== 0 &&
        number[1] !== 1 &&
        number[1] !== 0
    ) {
        return `${zeroToNine(number[0])} hundred ${from20to90(
            number[1]
        )} ${zeroToNine(number[2])}`;
    }

    function zeroToNine(value) {
        var zeroTo9 = new Map();
        zeroTo9.set("0", "zero");
        zeroTo9.set("1", "one");
        zeroTo9.set("2", "two");
        zeroTo9.set("3", "three");
        zeroTo9.set("4", "four");
        zeroTo9.set("5", "five");
        zeroTo9.set("6", "six");
        zeroTo9.set("7", "seven");
        zeroTo9.set("8", "eight");
        zeroTo9.set("9", "nine");
        return zeroTo9.get(value);
    }
    function from11to19(value) {
        var from11To19 = new Map();
        from11To19.set("11", "eleven");
        from11To19.set("12", "twelve");
        from11To19.set("13", "thirteen");
        from11To19.set("14", "fourteen");
        from11To19.set("15", "fifteen");
        from11To19.set("16", "sixteen");
        from11To19.set("17", "seventeen");
        from11To19.set("18", "eighteen");
        from11To19.set("19", "nineteen");
        return from11To19.get(value);
    }
    function from20to90(value) {
        var from20To90 = new Map();
        from20To90.set("1", "ten");
        from20To90.set("2", "twenty");
        from20To90.set("3", "thirty");
        from20To90.set("4", "forty");
        from20To90.set("5", "fifty");
        from20To90.set("6", "sixty");
        from20To90.set("7", "seventy");
        from20To90.set("8", "eighty");
        from20To90.set("9", "ninety");
        return from20To90.get(value);
    }
    function from10To90(value) {
        var from10to90 = new Map();
        from10to90.set("10", "ten");
        from10to90.set("20", "twenty");
        from10to90.set("30", "thirty");
        from10to90.set("40", "forty");
        from10to90.set("50", "fifty");
        from10to90.set("60", "sixty");
        from10to90.set("70", "seventy");
        from10to90.set("80", "eighty");
        from10to90.set("90", "ninety");
        return from10to90.get(value);
    }
};
