let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

const n = myArray.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    const currentValue = myArray[i];
    for (let j = i - 1; j >= 0; j--) {
        if (myArray[j] > currentValue) {
            myArray[j + 1] = myArray[j];
            insertIndex = j;
        } else {
            break;
        }
    }
    myArray[insertIndex] = currentValue;
}

console.log("Sorted array:", myArray);
