// Exercise 1.4
function plus(a, b){ return a + b; }
function minus(a, b){ return a - b; }
function a_plus_abs(a, b){
    return (b >= 0 ? plus :minus)(a, b);
}
console.log(a_plus_abs(-11,2));

// Exercise 1.5
function p() { return p() };
function test(x, y){
    return x == 0 ? 0 : y;
}
console.log(test(0, p()));
