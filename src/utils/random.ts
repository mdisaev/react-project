export function getRandomNumber(min: number, max: number, isMinInclusive: boolean = true,
    isMaxInclusive: boolean = false): number {

    if (min > max) {
        let temp: number;
        temp = min;
        min = max;
        max = temp;
    }

    if (max == min && (!isMaxInclusive || !isMinInclusive)) {
        throw new Error('min may not be equaled to max!')
    }

    let a: number = 0;

    if (isMaxInclusive && !isMinInclusive) {
        a = Math.floor(Math.random() * (max - min) + min + 1)
    }
    else if ((isMinInclusive) && !isMaxInclusive) {
        a = Math.floor(Math.random() * (max - min) + min)
    }
    else if (isMaxInclusive && isMinInclusive) {
        a = Math.floor(Math.random() * (max + 1 - min) + min)
    }
    else if (!isMaxInclusive && !isMinInclusive) {
        a = Math.floor(Math.random() * (max - 1 - min) + min + 1)
    }

    return a;

}

export function getRandomMatrix(rows: number, columns: number, min: number, max
    : number): number[][] {

    let arrayOfRows: number[] = [];
    for (let i = 0; i <= rows; i++) {
        arrayOfRows.push(Math.floor(Math.random() * (max - min) + min))
    }

    let arrayOfColumns: number[] = [];
    for (let i = 0; i <= columns; i++) {
        arrayOfColumns.push(Math.floor(Math.random() * (max - min) + min))
    }

    let randomMatrix: number[][] = [];
    randomMatrix.push(arrayOfColumns, arrayOfRows)

    return randomMatrix;
}

export function getRandomArrayElement(array: any[]): any {

    return array[Math.floor(Math.random() * array.length)]
}

export function getRandomDate(minYear: number, maxYear: number): Date {

    return new Date((Math.random() * (maxYear - minYear) + minYear), Math.floor(Math.random() * 12), (Math.floor(Math.random() * 31)))
}



