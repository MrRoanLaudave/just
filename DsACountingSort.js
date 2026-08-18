function countingSort(arr) {
    if (arr.length === 0) {
        return arr;
    }

    const maxVal = Math.max(...arr);
    const count = new Array(maxVal + 1).fill(0);

    for (const num of arr) {
        count[num]++;
    }

    arr.length = 0;

    for (let num = 0; num < count.length; num++) {
        const freq = count[num];
        for (let i = 0; i < freq; i++) {
            arr.push(num);
        }
    }

    return arr;
}

let unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
let sortedArr = countingSort(unsortedArr);
console.log("Sorted array:", sortedArr);
