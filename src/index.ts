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

    // [Symbol.iterator]() {
    //     return {
    //
    //     }
    // }

    public get(i: number, j: number) {
        return this._flatArray[this.columns*i + j]
    }

    public set(i, j, value) {
        this._flatArray[this.columns*i + j] = value;
    }

    public static from2DArray(arr: Array<Array<any>>): FlatGrid {
        const rows = arr.length;

        const fg = new FlatGrid(arr.length, arr[0].length);

        for (let i=0; i<arr.length; i++) {
            for (let j=0; j<arr[i].length; j++) {
                fg.set(i, j, arr[i][j]);
            }
        }

        return fg;
    }

    public get length() {
        return this._flatArray.length;
    }


}