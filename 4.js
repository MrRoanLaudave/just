let my_array = [64, 34, 25, 12, 22, 11, 90, 5];

let n = my_array.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
        if (my_array[j] > my_array[j + 1]) {
            [my_array[j], my_array[j + 1]] = [my_array[j + 1], my_array[j]];
        }
    }
}

console.log("Sorted array:", my_array);