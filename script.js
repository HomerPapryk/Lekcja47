function filterItems(arr1, arr2) {
  const filteredArr1 = arr1.filter((item) => item > 0);
  const filteredArr2 = arr2.filter((item) => item > 0);

  return [...filteredArr1, ...filteredArr2];
}

const result1 = filterItems([1, -2, 3], [1, 0]);
const result2 = filterItems([10, -10], [1, 2, 3]);

console.log(result1);
console.log(result2);
