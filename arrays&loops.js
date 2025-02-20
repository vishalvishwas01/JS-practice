// loops
// classic format
let a = [1, 93, 5, 6, 88]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

// 
console.log()
// for each loop --> calls a function, once for each array element
const a1 = [1, 2, 3]
a1.forEach((value, index, arr) =>{
    console.log(value, index, arr)
})

// 
console.log()
// for ... of loop --> for of loop can be used to get the values from array
let a3 = [1,93, 5, 6, 88]
for (const iterator of a3){
    console.log(iterator)
};


// 
console.log()
// for ... in loop --> it can be used to get the keys from array
let obj ={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if(Object.hasOwnProperty.call(obj,key)){  // hasownproperty is is a method that checks if an object has a direct property (not inherited).
        const element = obj[key];
        console.log(element, key)
    }
}


// 
console.log()
// map() -> creates a new array by performing some operation on an each array
let arr = [1, 13, 5, 7, 11]
let newArr = []
for (let index = 0; index < arr.length; index++){
    const element = arr[index];
    newArr.push(element ** 2)
}
console.log(newArr)
// above is long process and below is efficient way
let newArr1 = arr.map((e)=>{
    return e**2
})
console.log(newArr1)
// or
const a4 = [1,2,3]
a4.map((value,index,array)=>{
    return value * value;
})


// 
console.log()
// filter() --> with values that passes a test and creates a new array
let arr3 = [1, 13, 5, 7, 11];
const great = (e) => {
    if (e>7){
        return true
    }
    return false
}
console.log(arr3.filter(great))