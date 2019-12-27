import {FlatGrid} from '../dist/index.js';
import { strict as assert } from 'assert';
import { describe, it } from './utils.js';


function getSample2DArray() {
    return [
        ['a', 'b', 'c', 'd'],
        ['e', 'f', 'g', 'h'],
        ['i', 'j', 'k', 'l'],
        ['m', 'n', 'o', 'p']
    ]
}

describe('FlatGrid instance', () => {
    it('has correct flat length', () => {
        const fg = new FlatGrid(5, 10);

        assert(fg.length === 50);
    });
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