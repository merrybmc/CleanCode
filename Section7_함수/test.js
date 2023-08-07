console.log(
  Array(100)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => v.toString().includes('1'))
    .reduce((a, c) => a + c, 0)
);

let a = Array(100).fill(0);
console.log(a);

let b = a.map((_, i) => i + 1);
console.log(b);

let c = b.filter((v) => v.toString().includes('1'));
console.log(c);

console.log('1' + '2');

let temp = 12345;
console.log(temp.includes(1));
console.log(temp.includes('1'));

let temp2 = ['1', '2', '3', '4', '5', '6', '7', '8'];

console.log(temp2.reduce((a, b) => a + b));

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i].toString().includes('1') === true) {
//     newArray.push(array[i]);
//   }
// }

// console.log(newArray);
