function nice(real_name){
    console.log("hey " + real_name + " you");
}
nice("vishal");

// sum
function sum(a, b){
    console.log(a+b);
}
sum(3,5);


function sum(a,b){
    return a + b  // console will not work here it will print (3,5) not 8
}
result = sum(3,5);
console.log("sum of these is", result);

// const, arrow function, variable

const func1 = (x) => {
    console.log("i am an arrow", x);
}
func1(34);