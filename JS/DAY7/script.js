// Task 1 

const calculate = (a, b, callback) => {
    let result = a + b;
    callback(result);
};

calculate(10, 20, (result) => {
    console.log("Result:", result);
});

// Task 2 

const checkNumber = (number) => {
    return new Promise((resolve, reject) => {

        if (number > 10) {
            resolve("Valid Number");
        }
        else {
            reject("Invalid Number");
        }

    });
};

checkNumber(15)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

