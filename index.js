function* generate() {
    console.log('Start');
    yield 1;
    yield 2;
    yield 3;
    console.log('Finish');
}

// function generate() {
//     console.log('Start');
//     let current = 1;
//     return {
//         [Symbol.iterator]() {
//             return {
//                 next() {
//                     let result = { value: undefined, done: true };

//                     if (current <= 3) {
//                         result.value = current;
//                         result.done = false;
//                         current++; 
//                     }
//                     else {
//                         console.log('Finish');
//                     }    

//                     return result;
//                 }
//             }
//         }
//     }
// }

let iterator = generate()[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());