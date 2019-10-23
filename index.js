function *generator() {
    yield;
    yield;
}

let iterator = generator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());