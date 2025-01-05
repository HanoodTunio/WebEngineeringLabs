function outerFunction() {
    let outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable); // Can access 'outerVariable' from the outer scope
    }

    return innerFunction;
}

const closureExample = outerFunction(); // outerFunction returns innerFunction
closureExample(); // Outputs: 'I am from outer scope'

console.log(3+ +'15') // 18