document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll(".like-button");
    const removeButtons = document.querySelectorAll(".remove-button");
    const decrementButtons = document.querySelectorAll(".decrement-button");
    const incrementButtons = document.querySelectorAll(".increment-button");
    const quantityElements = document.querySelectorAll(".item-quantity");
    const priceElements = document.querySelectorAll(".item-price");
    const totalPriceElement = document.getElementById("total-price");

    let total = 0;

    likeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            button.classList.toggle("liked");
        });
    });

    removeButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const item = button.closest(".item");
            item.remove();
            updateTotal();
        });
    });

    decrementButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const quantity = parseInt(quantityElements[index].textContent);
            if (quantity > 1) {
                quantityElements[index].textContent = quantity - 1;
                updateTotal();
            }
        });
    });

    incrementButtons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const quantity = parseInt(quantityElements[index].textContent);
            quantityElements[index].textContent = quantity + 1;
            updateTotal();
        });
    });

    function updateTotal() {
        total = 0;
        priceElements.forEach((element, index) => {
            const quantity = parseInt(quantityElements[index].textContent);
            const price = parseFloat(element.textContent.replace("$", ""));
            total += quantity * price;
        });
        totalPriceElement.textContent = "$" + total.toFixed(2);
    }
});
