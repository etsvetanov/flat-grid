export function it(message, test) {
    const m = `\t * ${message} `;

    try {
        test();
        console.log(`${m} [PASSED]`);
    } catch (e) {
        if (e.name === 'AssertionError') {
            console.log(`${m} [FAILED]`);
        } else {
            throw e;
        }
    }
}

export function describe(thing, callback) {
    console.log(`${thing}:`);
    callback();
}