export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {

    function swap(array: number[], xIndex: number, yIndex: number) {
        var temp = array[xIndex];
        array[xIndex] = array[yIndex];
        array[yIndex] = temp;
    }

    const mergedArray = [...collection1, ...collection2, ...collection3]
    var minIndex: number = 0;
    // console.log(mergedArray)

    for (let i = 0; i < mergedArray.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < mergedArray.length; j++)
            if (mergedArray[j] < mergedArray[minIndex])
                minIndex = j;
        swap(mergedArray, minIndex, i);
    }

    return mergedArray;
}

const collection1 = [1, 3, 5, 6, 7, 8, 9, 10];
const collection2 = [6, 4, 2, 1, 0];
const collection3 = [7, 8, 9, 50, 24];

console.log(merge(collection1, collection2, collection3))