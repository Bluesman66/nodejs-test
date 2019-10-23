let xmen = ['Cyclops', 'Wolverine', 'Rogue'];

for (const value of xmen) {
    console.log(value);
} 

let iterator = xmen[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());