const a = [4,1,6,-2,-5,3,2,-8,6,7];
const number = (num, nfound) =>{
    if (num%2===0 && num > 0){
        return num
    }
}
const result = a.some(number)
console.log(result)