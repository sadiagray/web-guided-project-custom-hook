function myFunction(value) {
    const printValue = () => {
        console.log(value);
    }

    const printValuePlusSomething = (something) => {
        console.log(value + something);
    }

    return [printValue, printValuePlusSomething];
}

const [varOne, varTwo] = myFunction('my value');

varOne();
varTwo('another value');