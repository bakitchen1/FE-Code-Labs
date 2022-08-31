
let foodArray = [
    {name: "Apple", price: "$1.00"},
    {name: "Potato", price: "$0.60"},
    {name: "Orange", price: "$0.70"}
];

const ul = document.querySelector("ul")

for (const food in foodArray) {
    let li = document.createElement("li");
    li.innerText = foodArray[food].name;
    ul.appendChild(li);
}