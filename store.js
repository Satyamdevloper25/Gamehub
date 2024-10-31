const carts = document.querySelectorAll(".cart");
carts.forEach((item) => {
  item.addEventListener("click", () => {
    alert("Item Added to Cart");
  });
});

const buyButtons = document.querySelectorAll(".buy");
buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href="/purchase/purchase.html";
  });
});
