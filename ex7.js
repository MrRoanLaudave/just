let myArray = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array:", myArray);
let radixArray = [[], [], [], [], [], [], [], [], [], []];
let maxVal = Math.max(...myArray);
let exp = 1;

while (Math.floor(maxVal / exp) > 0) {

    while (myArray.length > 0) {
        const val = myArray.pop();
        const radixIndex = Math.floor(val / exp) % 10;
        radixArray[radixIndex].push(val);
    }

    for (const bucket of radixArray) {
        while (bucket.length > 0) {
            const val = bucket.pop();
            myArray.push(val);
        }
    }

    exp *= 10;
}

console.log("Sorted array:", myArray);
