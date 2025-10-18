// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // null converted to 0 => result : false
// console.log(null == 0);
// console.log(null >= 0); // null converted to 0 => result : true

// equality check (==) and comparisons (><>=<=) work differently. Comparisons convert null to a number, treating it as 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// strict check: === checks type also (no datatype coersion)