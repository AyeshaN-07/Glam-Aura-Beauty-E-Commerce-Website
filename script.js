// ================= CART =================

let cart = [];


// Add product to cart

function addToCart(productName, price) {

    cart.push({
        name: productName,
        price: price
    });

    updateCart();

    alert(productName + " added to cart! 🛒");
}


// Update cart count and total

function updateCart() {

    document.getElementById("cart-count").textContent = cart.length;

    let cartItems = document.getElementById("cart-items");

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cartItems.innerHTML = "";

        cart.forEach(function(item) {

            total = total + item.price;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <h4>${item.name}</h4>

                    <p>₹${item.price}</p>

                </div>
            `;

        });

    }

    document.getElementById("cart-total").textContent = total;
}


// ================= SHOW CART =================

function showCart() {

    document.getElementById("cart-box").classList.add("active");

}


// ================= CLOSE CART =================

function closeCart() {

    document.getElementById("cart-box").classList.remove("active");

}


// ================= SHOP NOW =================

function goToProducts() {

    document.getElementById("products").scrollIntoView({
        behavior: "smooth"
    });

}


// ================= SEARCH =================

function searchProducts() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let products =
        document.querySelectorAll(".product");


    products.forEach(function(product) {

        let productName =
            product.querySelector("h3").textContent.toLowerCase();

        if (productName.includes(searchValue)) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}


// ================= CHECKOUT =================

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert(
            "Thank you for shopping with Glam Aura! 💕"
        );

    }

}