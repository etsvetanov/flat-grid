export class FGSizeError extends Error {
    constructor() {
        super();
    }
}

export class FlatGrid<ValuesType> {
    public rows: number;
    public columns: number;

    public _flatArray: Array<ValuesType>;


    constructor(rows: number, columns: number) {
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
                return { value: self._flatArray[this.current], done: this.current === self.length }
            }
        }
    }

    public get(i: number, j: number): ValuesType {
        return this._flatArray[this.columns*i + j]
    }

    public set(i: number, j: number, value: ValuesType) {
        this._flatArray[this.columns*i + j] = value;
    }

    public static from2DArray<ValuesType>(arr: Array<Array<ValuesType>>): FlatGrid<ValuesType> {
        const rows = arr.length, columns = arr[0].length;
        const fg = new FlatGrid<ValuesType>(rows, columns);

        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                fg.set(i, j, arr[i][j]);
            }
        }

        return fg;
    }

    public static from1DArray<ValuesType>(arr: Array<ValuesType>, rows, columns): FlatGrid<ValuesType> {
        const fg = new FlatGrid<ValuesType>(arr.length, 1);

        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                fg.set(i, j, arr[i*columns + j]);
            }
        }

        return fg;
    }

    public get length(): number {
        return this._flatArray.length;
    }


}