// CART shooping
let BuyNow = document.getElementsByClassName("buy");
let cartTitle = document.getElementsByClassName("uk-card-title");
let cartPrice = document.getElementsByClassName("price");
let cartlenght = document.getElementById("cartcount");
let empty = document.getElementById("empty");
let cartquantity = document.getElementsByClassName("number");
let cart = [];
let cartItem = {}
let count = 1;

if (localStorage.getItem("CartShopping") != null) {
        cart = JSON.parse(localStorage.getItem("CartShopping"));
        cartlenght.innerHTML = cart.length
        empty.style.display = "none";
        display();
}
else {
        cartlenght.innerHTML = 0;
        empty.style.display = "none";
}
if (cart.length <= 0) {
        empty.style.display = "block";
}

for (let i = 0; i < BuyNow.length; i++) {
        BuyNow[i].addEventListener("click", function () {
                cartItem = {
                        title: cartTitle[i].textContent,
                        price: cartPrice[i].firstElementChild.textContent,
                        cartcount: 1,
                }
                cart.push(cartItem);
                localStorage.setItem("CartShopping", JSON.stringify(cart));
                cartlenght.innerHTML = cart.length;
                display();
        })
}

// Display in Model Cart
function display() {
        let details = "";
        for (var i = 0; i < cart.length; i++) {
                details += `<tr>
              <td class="text-warning">${cart[i].title}</td>
              <td>${cart[i].price}$</td>
              <td class="d-flex" onclick="savecount(${i})">
              <button onclick="decreament(${i})">-</button> 
              <input type="text"  maxlength="2" max="10" size="1" value="${cart[i].cartcount} " class="form-control w-25 number" >
              <button onclick="increament(${i})">+</button>
              </td>
              <td>
               <button class="btn btn-danger" onclick="deleteitem(${i})"><i class="fas fa-trash"></i></button>
              </td>
          </tr>`;
        }
        document.getElementById("tbody").innerHTML = details;
        empty.style.display = "none";
        totalPrice();
}

// Delete from cart
function deleteitem(x) {
        cart.splice(x, 1);
        display();
        localStorage.setItem("CartShopping", JSON.stringify(cart));
        cartlenght.innerHTML = cart.length;
        if (cart.length <= 0) {
                empty.style.display = "block";
        }
}

//Total Price
function totalPrice() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
                total += Number((cart[i].price) * (cart[i].cartcount))
        }
        document.getElementById("total-price").innerHTML = `${total} $`;
}

function savecount(x) {
        let total = 0;
        cartquantity[x].value = count;
        // console.log(cartquantity[x].value)
        cart[x].cartcount = cartquantity[x].value;
        // console.log(cart)
        localStorage.setItem("CartShopping", JSON.stringify(cart))
        for (let i = 0; i < cart.length; i++) {
                total += Number((cart[i].price) * cart[i].cartcount)
        }
        document.getElementById("total-price").innerHTML = `${total} $`;
}


// increament and decreament buttons
function increament(y) {
        count = cartquantity[y].value;
        count++;
        cartquantity[y].value = count;

}
function decreament(y) {
        count = cartquantity[y].value;
        if (count <= 0) {
                cartquantity[y].value = 0;
        }
        else {
                count--
                cartquantity[y].value = count
        }
}


let btn = document.getElementById("toggle_btn");
let drop = document.querySelector(".drop")

btn.addEventListener("click", function () {
        drop.classList.toggle('open')
});

$('[href$="modal-example"]').click(function () {
        $(".drop").hide(500)
});

$(btn).click(function () {
        $(".open").css("display", "block")
})

$(".buy").click(function () {
        $("#add").slideDown(200).slideUp(1000);
})
