'use strict';

// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const i in items) {
    console.log(`${items[i]} ${i}`)
  } 
}

// 2. everyOtherItem
/* the for ... in is used to loop through the indices of the items list to be able to skip count. So for every one item, you skip the next and print the one after */
function everyOtherItem(items) {
  // Replace this with your code
  for (const item in items) {
    if (item % 2 === 0) {
        console.log(items[item])
    }
    }
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
//   function comparison(a, b) {
//     return a - b
//   }

  let sorted = items.sort(function(a, b) {return a-b});
  let slicedItems = sorted.slice(0, n);
  slicedItems.reverse();

  return slicedItems

}

// const nums = [5, 2, 8, 1, 9, 3];
const n = 3;

// const items = ['apple', 'cherry', 'mango', 'guava', 'strawberry']
// printIndices(items)
// everyOtherItem(items)
const items = [1, 30, 4, 21, 100000];
console.log(smallestNItems(items, n))