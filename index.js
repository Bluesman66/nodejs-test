function testSpread(a, b, c) {    
    console.log(a + b + c);
}

function testRest(...arr) {
    let sum = 0;

    arr.forEach(function(value) {
        sum += value;
    })

    console.log(sum);
}

let arr = [1,2,3];
testSpread(...arr);

testRest(1,2,3,4,5);
