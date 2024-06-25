const { or, and, calculateTruthTable, calculateTruthTable3 } = require('../../utils/truthTableHelpers');

// Implement the imported helper functions from line 1
//    Read the export file for the explanation of how they work

// Example workflow for the problem directly below:
//    A    B     !A || (A && B)
//    -------------------
//    0    1      ?

//    1. !A -> 1
//    2. calculateTruthTable(0, and, 1) -> 0
//    3. calculateTruthTable(1, or, 0) -> 1
//    4. Answer: 1

/******************************************************************************/

// Update arguments to calculate and console.log returned value
// console.log(calculateTruthTable(0, and, 1)); // 0
// console.log(calculateTruthTable(1, or, 0)); // 1

let A = 1;
let B = 0;
console.log(calculateTruthTable(A, or, B));
console.log(calculateTruthTable(A, and, B));

// A    B     !A || (A && B)
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1 

console.log(calculateTruthTable(!0, or, 0));
console.log(calculateTruthTable(!0, or, 1));
console.log(calculateTruthTable(!1, or, 0));
console.log(calculateTruthTable(!1, or, 1));

// A    B     B || !A
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1

console.log(calculateTruthTable(!0, or, 0));
console.log(calculateTruthTable(!0, or, 1));
console.log(calculateTruthTable(!1, or, 0));
console.log(calculateTruthTable(!1, or, 1));

// A    B     !(A && !B)   => equiv. to !A OR B
// --------------------
// 0    0       1
// 0    1       1
// 1    0       0
// 1    1       1

console.log(!calculateTruthTable(0, and, !0));
console.log(!calculateTruthTable(0, and, !1));
console.log(!calculateTruthTable(1, and, !0));
console.log(!calculateTruthTable(1, and, !1));

console.log(calculateTruthTable(!0, or, 0));
console.log(calculateTruthTable(!0, or, 1));
console.log(calculateTruthTable(!1, or, 0));
console.log(calculateTruthTable(!1, or, 1));

// A    B     !(A || !B)    => equiv. to !A && B
// --------------------
// 0    0       0
// 0    1       1
// 1    0       0
// 1    1       0

console.log(!calculateTruthTable(0, or, !0));
console.log(!calculateTruthTable(0, or, !1));
console.log(!calculateTruthTable(1, or, !0));
console.log(!calculateTruthTable(1, or, !1));

console.log(calculateTruthTable(!0, and, 0));
console.log(calculateTruthTable(!0, and, 1));
console.log(calculateTruthTable(!1, and, 0));
console.log(calculateTruthTable(!1, and, 1));

// A    B     A || !A     
// --------------------
// 0    0       1
// 0    1       1
// 1    0       1
// 1    1       1

A = 0;
console.log(calculateTruthTable(A, or, !A));
console.log(calculateTruthTable(A, or, !A));
A = 1;
console.log(calculateTruthTable(A, or, !A));
console.log(calculateTruthTable(A, or, !A));

// A    B     B && !B
// --------------------
// 0    0       0
// 0    1       0
// 1    0       0
// 1    1       0

B = 0;
console.log(calculateTruthTable(B, and, !B));
console.log(calculateTruthTable(B, and, !B));
B = 1;
console.log(calculateTruthTable(B, and, !B));
console.log(calculateTruthTable(B, and, !B));

// A    B    C     A && B || !C
// --------------------
// 0    0    0       1
// 0    0    1       0
// 0    1    0       1
// 0    1    1       0
// 1    0    0       1
// 1    0    1       0
// 1    1    0       1
// 1    1    1       1

console.log(calculateTruthTable3(0, and, 0, or, !0));
console.log(calculateTruthTable3(0, and, 0, or, !1));
console.log(calculateTruthTable3(0, and, 1, or, !0));
console.log(calculateTruthTable3(0, and, 1, or, !1));
console.log(calculateTruthTable3(1, and, 0, or, !0));
console.log(calculateTruthTable3(1, and, 0, or, !1));
console.log(calculateTruthTable3(1, and, 1, or, !0));
console.log(calculateTruthTable3(1, and, 1, or, !1));

// A    B    C     !A || (B && C)   => equiv. to !B OR !C
// --------------------
// 0    0    0       1
// 0    0    1       1
// 0    1    0       1
// 0    1    1       1
// 1    0    0       0
// 1    0    1       0
// 1    1    0       0
// 1    1    1       1

// a couple wrong values --
console.log(calculateTruthTable3(!0, or, 0, and, 0));
console.log(calculateTruthTable3(!0, or, 0, and, 1));
console.log(calculateTruthTable3(!0, or, 1, and, 0));
console.log(calculateTruthTable3(!0, or, 1, and, 1));
console.log(calculateTruthTable3(!1, or, 0, and, 0));
console.log(calculateTruthTable3(!1, or, 0, and, 1));
console.log(calculateTruthTable3(!1, or, 1, and, 0));
console.log(calculateTruthTable3(!1, or, 1, and, 1));

// reordering arguments so B && C is on the left, !A on the right \/

console.log(calculateTruthTable3(0, and, 0, or, !0));
console.log(calculateTruthTable3(0, and, 1, or, !0));
console.log(calculateTruthTable3(1, and, 0, or, !0));
console.log(calculateTruthTable3(1, and, 1, or, !0));
console.log(calculateTruthTable3(0, and, 0, or, !1));
console.log(calculateTruthTable3(0, and, 1, or, !1));
console.log(calculateTruthTable3(1, and, 0, or, !1));
console.log(calculateTruthTable3(1, and, 1, or, !1));