// arrays are variable which can hold more than one value, it can be of different types
// const a = [7, "harry", false]
// denoted by square brackets
// arrays are mutable

let arr = [1,2,4,5,7];
console.log(arr);
console.log(arr.length);
console.log(arr[0]);  // index number of arrays

// changing the values
let numbers = [7,2,40,9]
numbers[1] = 59;  // this does not work in string as it is immutable, in string it will still return the original value.
console.log(numbers);

// in JS, arrays are objects. the type of operator on arrays returns "object"
const n =[1,2,3];
console.log(typeof n);  // it will return object instead of array

// converting array to string
console.log(arr.toString());  // output will look like 1,2,4,5,7 no square brackets

// joining - it is a array element using seperator
console.log(arr.join(" and "));  // output look like 1 and 2 and 4 and 5 and 7

// pop -  remove last element
console.log(arr.pop()); // this will display the deleted element
console.log(arr)  // to view the modified arrays

// push - add after last element
console.log(arr.push("vishal")); // display the last element not vishal
console.log(arr);  // to view the modified arrays

// shift - remove 1st element
console.log(arr.shift());  // this will display the deleted element
console.log(arr)  // to view the modified arrays

// unshift - add at 1st place (no replace)
console.log(arr.unshift(99));  // display the 1st element not 99
console.log(arr)  // to view the modified arrays

// delete
console.log( delete arr[0]); // it will return true
console.log(arr);  // to view the modified arrays it will return empty item
console.log(arr.length); // it is still coming 5 even after deleting an array means it is still allocating the memory


// concat -  used to join arrays
// returns new array, does not change existing arrays and it is the only one that does not modify the original array

let a1 = [1,2,3];
let a2 = [4,5,6];
let a3 = [9,8,7];
console.log(a1.concat(a2, a3));  // will not modify the original
console.log(arr)  // output will be the previous one not the concat one.

// sort , modifies the original array
// sort takes an optional compare function. if this function is provided as the first arguement, the sort() function will consider these values (the values returned from the compare function) as basis of sorting.
let a=[7,9,8]
console.log(a.sort())
console.log(arr.sort())

// splice -  use to add new items to an array (modify the array)

let num = [1,2,3,4,5] // there index no. is 0 1 2 3 4

// 1st means position to start or add from(count from index 0)
// 2nd means numbers of elements to remove(count from index 1)
// 3rd means element to be added
console.log(num.splice(1, 2))  // display the removed item
console.log(num)  // display the modified array

console.log(num.splice(1,2, 30, 40))  // still display the removed item
console.log(num)  // display the modified with added array


// slice - slice out a peice from an array create new array (does not modify the existing array)
console.log(num.slice(1))  // start from index 1 and go till end
console.log(num.slice(1,2)) // start from index 1 and go till index 3 which will not include.
console.log(num)  // does not display modify array


// shortcut to make array
//  let arr = Array.from(Array(number).keys())