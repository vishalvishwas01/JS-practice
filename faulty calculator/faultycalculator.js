let random = Math.random()

let a = prompt("enter 1st number")
let b = prompt("enter 2nd number")
let c = prompt("enter operation")

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    console.log(c)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}
