export let _REGISTERED_TESTS = 0;
export let _PASSED_TESTS = 0;

export function it(message, test) {
    _REGISTERED_TESTS += 1;
    const m = `\t * ${message} `;

    try {
        test();
        console.log(`${m} [PASSED]`);
        _PASSED_TESTS += 1;
    } catch (e) {
        if (e.name === 'AssertionError') {
            console.log(`${m} [FAILED]`);
            console.error(e);
        } else {
            throw e;
        }
    }
}

export function describe(thing, callback) {
    console.log(`${thing}:`);
    callback();
}