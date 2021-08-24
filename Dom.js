// EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

console.log(document.forms[0]);

var headerTitle = document.getElementById("header-title");
var header =document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";

//for(var i=0; i<items.length; i++){
//    items[i].style.backgroundColor = "#f4f4f4";
//}

var items = document.getElementsByClassName("list-group-item");
console.log(items[1]);
items[1].textContent = "Hello 2: Changed from Javascript"
items[1].style.backgroundColor = "yellow";
items[1].style.fontWeight = "bold"

// QUERYSELECTOR //

var header= document.querySelector("#main-header");
header.style.borderTop = "solid 4px blue";

var lastItem = document.querySelector(".list-group-item:last-child");
lastItem.style.color ="red";
lastItem.textContent= "item 4 - Also changed from Javascript";