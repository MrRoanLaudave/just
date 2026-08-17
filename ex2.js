function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
}

function quicksort(array, low = 0, high = null) {
    if (high === null) {
        high = array.length - 1;
    }

    if (low < high) {
        let pivot_index = partition(array, low, high);
        (array, low, pivot_index - 1);
        (array, pivot_index + 1, high);
    }
}

let my_array = [64, 34, 25, 12, 22, 11, 90, 5];
quicksort(my_array);
console.log("Sorted array:", my_array);