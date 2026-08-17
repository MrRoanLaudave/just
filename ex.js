let myArray = [64, 34, 25, 12, 22, 11, 90, 5];

const n = myArray.length;
for (let i = 1; i < n; i++) {
    let insertIndex = i;
    const currentValue = myArray.splice(i, 1)[0];
    for (let j = i - 1; j >= 0; j--) {
        if (myArray[j] > currentValue) {
            insertIndex = j;
        }
    }
    myArray.splice(insertIndex, 0, currentValue);
}

console.log("Sorted array:", myArray);
