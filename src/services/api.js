const evaluate = (expression) => {
    /* eslint-disable */
    // This rule is important in production apps!
    // Read more: https://eslint.org/docs/rules/no-eval
    // To simplify the functionality in this course we use eval
    const calcFunc = eval;
    /* eslint-enable */
    try {
        return calcFunc(expression);
    } catch (e) {
        console.error("Error: Incorrect Expression of digits & operators :(")
        return null;
    }
}

export const evaluateExpression = (expression) => {
    // We do not have a Calculator service, so we need to fake one.
    // We make a real request to the Postman Echo server, but ignore the response,
    // evaluate the input expression and return the result instead.
    return fetch(`https://postman-echo.com/get?expr=fake`, { mode: 'no-cors' })
        .then(() => evaluate(expression));
}
