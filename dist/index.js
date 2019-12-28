export class FGSizeError extends Error {
    constructor() {
        super();
    }
}
export class FlatGrid {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this._flatArray = new Array(rows * columns);
    }
    [Symbol.iterator]() {
        const self = this;
        return {
            current: -1,
            next: function () {
                this.current += 1;
                return { value: self._flatArray[this.current], done: this.current === self._flatArray.length };
            }
        };
    }
    get(i, j) {
        return this._flatArray[this.columns * i + j];
    }
    set(i, j, value) {
        this._flatArray[this.columns * i + j] = value;
    }
    static from2DArray(arr) {
        const rows = arr.length;
        const fg = new FlatGrid(arr.length, arr[0].length);
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                fg.set(i, j, arr[i][j]);
            }
        }
        return fg;
    }
    get length() {
        return this._flatArray.length;
    }
}
