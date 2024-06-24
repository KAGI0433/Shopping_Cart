const openshopping = document.querySelector(".openShopping");
const closeShopping = document.querySelector(".closeShopping");
const List = document.querySelector(".list");
const listCard = document.querySelector(".listCard");
const total = document.querySelector(".total");
const body = document.querySelector(".body");
const quantity = document.querySelector(".quantity");

openshopping.addEventListener("click", () => {
    body.classList.add("item")
})
closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let product = [
    {
        id: 1,
        name: "product 1"
        images: "1.PNG"
        price: "$ 58.50"
    },
    {
        id: 2,
        name: "product 2"
        images: "2.PNG"
        price: "$ 40.50"
    },
    {
        id: 3,
        name: "product 3"
        images: "3.PNG"
        price: "$ "
    },
    {
        id: 4,
        name: "product 4"
        images: "4.PNG"
        price: "$ 58.50"
    },
    {
        id: 5,
        name: "product 5"
        images: "5.PNG"
        price: "$ 58.50"
    },
    {
        id: 6,
        name: "product 6"
        images: "6.PNG"
        price: "$ 58.50"
    },
]
