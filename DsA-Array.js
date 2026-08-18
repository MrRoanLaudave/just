const myArray = [7, 12, 9, 4, 11];
let minVal = myArray[0]; // Step 1

for (let i of myArray) { // Step 2
    if (i < minVal) {    // Step 3
        minVal = i;
    }
}

console.log('Lowest value: ', minVal); // Step 4
