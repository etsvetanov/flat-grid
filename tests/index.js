import {FlatGrid} from '../dist/index.js';
import { strict as assert } from 'assert';
import { describe, it, _PASSED_TESTS, _REGISTERED_TESTS } from './utils.js';


function getSample2DArray() {
    return [
        ['a', 'b', 'c', 'd'],
        ['e', 'f', 'g', 'h'],
        ['i', 'j', 'k', 'l'],
        ['m', 'n', 'o', 'p'],
        ['q', 'r', 's', 't']
    ]
}

function getSample1DArray() {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
}

describe('FlatGrid instance', () => {
    it('has correct flat length', () => {
        const fg = new FlatGrid(5, 10);

        assert(fg.length === 50);
    });

    it('gets the correct item', () => {
        const sampleArray = getSample2DArray();
        const fg = FlatGrid.from2DArray(sampleArray);

        assert(fg.get(1, 0) === 'e');
    });

    it('sets the correct item', () => {
        const sampleArray = getSample2DArray();
        const fg = FlatGrid.from2DArray(sampleArray);
        fg.set(1, 3, 'hhh');
        assert(fg.get(1, 3) === 'hhh');
    });

    it('is iterable', () => {
        const sampleArray = getSample2DArray();
        const fg = FlatGrid.from2DArray(sampleArray);

        const it = fg[Symbol.iterator]();
        assert(it.next().value === 'a');
        assert(it.next().value === 'b');
        assert(it.next().value === 'c');

        let counter = 0;

        for (let item of fg) counter++;

        assert(counter === 16);

    })
});

describe('FlatGrid.from2DArray', () => {
    it('constructs correct flat array', () => {
        const sampleArray = getSample2DArray();
        const fg = FlatGrid.from2DArray(sampleArray);

        const expectedFlatArray = sampleArray.reduce((acc, curr) => acc.concat(curr), []);

        for (let i=0; i<expectedFlatArray.length; i++) {
            assert(fg._flatArray[i] === expectedFlatArray[i]);
        }
    })
});

describe('FlatGrid.from1DArray', () => {
    it('constructs correct flat array', () => {
        const sampleArray = getSample1DArray();
        const fg = FlatGrid.from1DArray(sampleArray, 5, 4);

        assert(fg.get(1, 0) === 'e');
    })
});

console.log(`\nTests completed. Passed [${_PASSED_TESTS}/${_REGISTERED_TESTS}].`);