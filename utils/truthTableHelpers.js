// Ideas for functions below came from this site:
// https://www.i-programmer.info/programming/javascript/967-javascript-jems-active-logic-truthy-and-falsy.html

/******************************************************************************/

// Returns value based on the 'OR' Truth Table
const or = (A, B) => {
  if (A) return A;
  else return B;
};

// Returns value based on the 'AND' Truth Table
const and = (A, B) => {
  if (A) return B;
  else return A;
};

// 'cb' parameter should be either 'OR' or 'AND' functions from above
const calculateTruthTable = (A, cb, B,) => {
  console.log(cb(A, B));
  return cb(A, B);
};

const calculateTruthTable3 = (A, cb, B, cb2, C) => {
  let AB = cb(A, B);
  console.log(AB);
  let ABC = cb2(AB, C);
  console.log(ABC);
  return ABC;
};

// A    B     !A || (A && B)
// --------------------
// 0    0       ?
// 0    1       ?
// 1    0       ?
// 1    1       ? 

let A = 1;
let B = 0;
console.log(calculateTruthTable(A, or, B));
console.log(calculateTruthTable(A, and, B));



module.exports = {
  or,
  and,
  calculateTruthTable,
  calculateTruthTable3
};
