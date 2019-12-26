import {FlatGrid} from '../dist/index.js';
import { strict as assert } from 'assert';
import { describe, it } from './utils.js';


describe('FlatGrid', function () {
    it('has correct flat length', () => {
        const fg = new FlatGrid(5, 10);

        assert(fg.length === 50);
    });

});