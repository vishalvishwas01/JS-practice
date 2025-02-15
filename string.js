// string is immutable

let a = "vishal";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);
console.log(a.length);

// template liberal  - -> use bacticks instead of quotes to define string

let real_name='vishal' // with help of template liberals, it is possible to use both single as well as double quotes inside string
console.log("my name is " + real_name)
console.log(`my name is ${real_name}`) // it is called string interpolation

// casing

let b = 'harry'
console.log(b.toUpperCase())
console.log(b.toLowerCase())

// slice

let c ='tushar'
console.log(c.slice(1,4)) //4 is not included output will be 1 2 3 only ( it will count from 0)
console.log(c.slice(2))  // from 2 till end ( it will count from 0)

// replace

let d = "harry bhai"
console.log(d.replace("bhai", "77"))
console.log(d.replace("ha", "77"))  // only 1st occurence will replace not the 2nd

// concat (joins different variable or arrays, + can also be used)

console.log(b.concat(d))
console.log(b.concat(d , "77"))

// trim (remove white space)
console.log(d.trim())

// endswith and index

console.log(b.endsWith("am"))
console.log(b.startsWith("ha"))
console.log(c.indexOf("ha"))

