let a = 6
function factorial(number){
    let arr = Array.from(Array(number+1).keys())  // that +1 is used that it does not start array from 0
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log(c)
}
factorial (a)

// using for loop
 let b =6
 function factorial1(number){
    let fac = 1;
    for(let index = 1; index<=number;index++){
        fac = fac*index
    }
    return fac
 }
 console.log(factorial1(b))

//  using reduce (manaual)
let arr =[6,5,4,3,2,1]
const red = (a,b)=> {
    return a*b
}
console.log(arr.reduce(red))

// using reduce with loop
 let num = [6]
 let arr1 = []

 for (let index = 0; index < num; index++) {
    arr1.push(index+1);
 }

 const red1 = (a,b)=>{
    return a*b
 }
 console.log(arr1.reduce(red1))
