console.log(2);
console.log(4);
let count = 2;

function fibonacci(prev1, prev2) {
    if (count <= 19) {
        let newFibo = prev1 + prev2;
        console.log(newFibo);
        prev2 = prev1;
        prev1 = newFibo;
        count++;
        fibonacci(prev1, prev2);
    } else {
        return;
    }
}

fibonacci(1, 0);