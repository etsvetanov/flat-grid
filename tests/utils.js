export function it(message, test) {
    const m = `\t * ${message} `;

    try {
        test();
        console.log(`${m} [PASSED]`);
    } catch (e) {
        console.log(`${m} [FAILED]`);
        throw e;
    }
}

export function describe(thing, callback) {
    console.log(`${thing}:`);
    callback();
}