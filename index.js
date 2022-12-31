// 1. How to find duplicate elements in a given Array?

const numArr = [5, 2, 3, 8, 2, 3, 5, 1];

const duplicateArr = numArr.filter((ele, index, arr) => 
     arr.indexOf(ele) !== index);

console.log(duplicateArr);