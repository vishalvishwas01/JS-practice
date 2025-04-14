let settings = { darkMode: true, fontSize: 14, notifications: false };
// Output: { darkMode: true, notifications: false }

let newobj = {}

for (const key in settings){
    if (typeof settings[key] === "boolean"){
        newobj[key] = settings[key];
    }
}
console.log(newobj)