document.body.childNodes // returns [text, div.container, text, scripts, text, comments]  --> text and comment is not an element


document.body.childNodes[0] // text node which is the space between container div and box div
document.body.childNodes[1]  // div.container
document.body.childNodes[1].childNodes[1]  // div.box which is box1

// document.body can sometimes be null if JS is written before body tag

// children --> direct as well as deeply nested elements of an elemtn are called children
// childNodes --> elements that are direct children --> head and body are childre of html
// descendant nodes --> all nested element, children, their children

let cont = document.body.childNodes[1]
cont.firstChild  // text node which is 0
cont.firstElementchild  // which is box1
cont.firstElementChild.style.backgroundColor = "red";

cont.firstElementChild.ParentElement  // select the container div
cont.nextElementSibling // selects box 2  -- parent div should be same

document.body.firstElementChild.childNodes  // text, div.box, text, div.box
document.body.firstElementChild.children  // returns only element --> div.box, div.box, div.box
