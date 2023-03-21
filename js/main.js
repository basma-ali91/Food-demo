let btn = document.getElementById("toggle_btn");
let drop = document.querySelector(".drop")

btn.addEventListener("click", function () {
        drop.classList.toggle('open')
});


// CART shooping
let BuyNow = document.getElementsByClassName("buy");
let cartTitle = document.getElementsByClassName("uk-card-title");
let cartPrice = document.getElementsByClassName("price");
let cartlenght=document.getElementById("cartcount");
let Quantity = document.getElementsByClassName("number");
let cart = [];
let count = 1;

if (localStorage.getItem("CartShopping") != null) {
        cart = JSON.parse(localStorage.getItem("CartShopping"));
        cartlenght.innerHTML=cart.length;
        totalPrice();
        display();
}
else{
        cartlenght.innerHTML=0;
}

for (let i = 0; i < BuyNow.length; i++) {
        BuyNow[i].addEventListener("click", function () {
                let cartItem = {
                        title: cartTitle[i].textContent,
                        price: cartPrice[i].firstElementChild.textContent,

                }
                cart.push(cartItem);
                localStorage.setItem("CartShopping", JSON.stringify(cart));
                cartlenght.innerHTML=cart.length;
                console.log(cart)
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
              <td>
              <button onclick="decreament()">-</button> 
              <span class="number">${count}</span>
              <button onclick="increament()">+</button>
              </td>
              <td>
               <button class="btn btn-danger" onclick="deleteitem(${i})"><i class="fas fa-trash"></i></button>
              </td>
          </tr>`;
        }
        document.getElementById("tbody").innerHTML = details;
        totalPrice();
}

// Delet from cart
function deleteitem(x) {
        cart.splice(x, 1);
        display();
        localStorage.setItem("CartShopping", JSON.stringify(cart));
        cartlenght.innerHTML=cart.length;
}

//TOtal Price
function totalPrice() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
                total += Number(cart[i].price)
        }
        document.getElementById("total-price").innerHTML = `${total} $`;
}

function increament() {
       console.log("welcome");
       display()
}
function decreament() {
      console.log("welcome1")
}




$('[href$="modal-example"]').click(function () {
        $(".drop").hide(500)
});

$(btn).click(function(){
        $(".open").css("display","block")
})

$(".buy").click(function(){
       $("#add").slideDown(200).slideUp(1000);
})


