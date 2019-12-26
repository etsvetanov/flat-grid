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
    get(i, j) {
        return this._flatArray[this.columns * i + j];
    }
    set(i, j, value) {
        this._flatArray[this.columns * i + j] = value;
    }
    static from2DArray(arr) {
        const rows = arr.length;
        const columns = arr[0].length;
        const fg = new FlatGrid(arr.length, arr[0].length);
        for (let i = 0; i < arr.length; i++) {
            fg._flatArray.splice(i, rows);
        }
    }
    get length() {
        return this._flatArray.length;
    }
}
