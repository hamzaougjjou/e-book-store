
const header_cart_container = document.getElementById("header_cart_container");
const btn_close_cart = document.getElementById("btn_close_cart");
const btn_open_cart = document.getElementById("btn_open_cart");


btn_open_cart.addEventListener("click", () => {
    header_cart_container.style.display = "grid";
    header_cart_container.style.animationName = "openCart";
    header_cart_container.style.transitionTimingFunction = "ease";
    header_cart_container.style.animationDuration = "0.4s";
    
    header_cart_container.style.width = "500px";
})


btn_close_cart.addEventListener("click", () => {
    header_cart_container.style.animationName = "closeCart";
    header_cart_container.style.transitionTimingFunction = "ease";
    header_cart_container.style.animationDuration = "0.5s";
    setTimeout(() => {
        header_cart_container.style.width = "0";
        header_cart_container.style.display = "none";
    }
        , 400);
})
