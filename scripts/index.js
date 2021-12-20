function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6
if (true) {


} else {
  console.log(1111);
}

console.log(sum.apply(null, numbers));

let numberStore = [0, 1, 2];
const newNumber = 12;
numberStore = [...numberStore, newNumber];
