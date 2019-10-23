function* range(start, end) {
    let current = start;
    while (current <= end) {
        yield current++;
    }
}

function range2(start, end) {
    let current = start;    
    return {
        [Symbol.iterator]() {
            return {
                next() {
                    let result = { value: undefined, done: true };
                    if (current <= end) {
                        result.value = current++;
                        result.done = false;
                    }
                    return result;
                }
            }
        }
    }
}

console.log('range');
for (const num of range(1, 10)) {
    console.log(num);
}

console.log('range2');
for (const num of range2(1, 5)) {
    console.log(num);
}