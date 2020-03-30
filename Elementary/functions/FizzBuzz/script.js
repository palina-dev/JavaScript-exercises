function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "Fizz Buzz";
    }
    if (number % 3 === 0) {
        return "Fizz";
    }
    if (number % 5 === 0) {
        return "Buzz";
    }
    return number;
}

fizzBuzz(10);

function fizzBuzz2(data) {

    switch (data) {

        case ((Math.ceil(data / 3) * 3) && (Math.ceil(data / 5) * 5)):
            return "Fizz Buzz";

        case (Math.ceil(data / 3) * 3):
            return "Fizz";

        case (Math.ceil(data / 5) * 5):
            return "Buzz";

        default:
            return String(data);
    }
}

fizzBuzz2(10);