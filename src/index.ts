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

    public get(i: number, j: number) {
        return this._flatArray[this.columns*i + j]
    }

    public set(i, j, value) {
        this._flatArray[this.columns*i + j] = value;
    }

    public static from2DArray(arr: Array<Array<any>>) {
        const rows = arr.length;
        const columns = arr[0].length;

        const fg = new FlatGrid(arr.length, arr[0].length);

        for (let i=0; i<arr.length; i++) {
            fg._flatArray.splice(i, rows)
        }
    }

    public get length() {
        return this._flatArray.length;
    }


}