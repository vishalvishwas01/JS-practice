async function getData1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.getElementById("line2").style.display = "block");
        }, 3000);
    });
}

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.getElementById("line3").style.display = "block");
        }, 8000);
    });
}

async function getData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.getElementById("line4").style.display = "block");
        }, 2000);
    });
}

async function getData4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(document.getElementById("line5").style.display = "block");
        }, 10000);
    });
}

async function main() {
    console.log(document.getElementById("line1").style.display = "block");

    let data1 = await getData1();
    console.log(data1);

    let data2 = await getData2();
    console.log(data2);

    let data3 = await getData3();
    console.log(data3);

    let data4 = await getData4();
    console.log(data4);
}

main();
