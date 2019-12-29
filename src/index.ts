export class FGSizeError extends Error {
    constructor() {
        super();
    }
}

export class FlatGrid {
    public rows: number;
    public columns: number;

    public _flatArray: Array<any>;


    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;

        this._flatArray = new Array(rows * columns);
    }

    [Symbol.iterator]() {
        const self = this;

        return {
            current: -1,
            next: function() {
                this.current += 1;
                return { value: self._flatArray[this.current], done: this.current === self._flatArray.length }
            }
        }
    }

    public get(i: number, j: number) {
        return this._flatArray[this.columns*i + j]
    }

    public set(i, j, value) {
        this._flatArray[this.columns*i + j] = value;
    }

    public static from2DArray(arr: Array<Array<any>>): FlatGrid {
        const rows = arr.length, columns = arr[0].length;
        const fg = new FlatGrid(rows, columns);

        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                fg.set(i, j, arr[i][j]);
            }
        }

        return fg;
    }

    public static from1DArray(arr: Array<any>, rows, columns): FlatGrid {
        const fg = new FlatGrid(arr.length, 1);

        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                fg.set(i, j, arr[i*columns + j]);
            }
        }

        return fg;
    }

    public get length() {
        return this._flatArray.length;
    }


}