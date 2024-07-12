function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");    // when divible by 3 and 5 
        } else if (i % 3 === 0) {       // divided by 3 only 
            console.log("Fizz");
        } else if (i % 5 === 0) {        // divided by 3 only
            console.log("Buzz");
        } else {                            // not divisible by either 3 0r 5 
            console.log(i);
        }
    }
}


fizzbuzz();
