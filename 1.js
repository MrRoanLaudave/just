let prev2 = 2;
let prev1 = 4;
console.log(prev2);
console.log(prev1);

for (let fibo = 0; fibo < 18; fibo++) {
    let newFibo = prev1 + prev2;
    console.log(newFibo);
    prev2 = prev1;
    prev1 = newFibo;
}