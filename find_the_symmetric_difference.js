/*
ALGORITHMS: FIND THE SYMMETRIC DIFFERENCE

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/


// const symDif = [];

// function sym(A, B) {

//   for(i = 0; i < A.length; i++) {
//       if (!B.includes(A[i]))
//           {
//             symDif.push(A[i]);
//           };
//   };

//   for(i = 0; i < B.length; i++) {
//     if (!A.includes(B[i]))
//       {
//         symDif.push(B[i]);
//       };
//   };

//   console.log(symDif);
// }

// sym([1, 2, 3], [2, 3, 4]);

function test(){
  console.log(arguments);
}

test(1, 2, 3);
