let reducers = document.querySelectorAll(".reducer");
let increasers = document.querySelectorAll(".increaser");
let addtocart = document.querySelectorAll(".product-cart");

reducers.forEach(button => {
    button.addEventListener("click", () => {
        let box = button.parentElement.querySelector(".product-qty-box");
        let value = parseInt(box.innerHTML);
        if (value > 1) {
            let finalvalue = value - 1;
            box.innerHTML = finalvalue;
            // You can use finalvalue later here if needed
        }
    });
});

increasers.forEach(button => {
    button.addEventListener("click", () => {
        let box = button.parentElement.querySelector(".product-qty-box");
        let value = parseInt(box.innerHTML);
        let finalvalue = value + 1;
        box.innerHTML = finalvalue;
        // You can use finalvalue later here if needed
    });
});

addtocart.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productBox = button.closest(".product-box");

        const priceText = productBox.querySelector(".product-content").textContent.trim();
        const qtyText = productBox.querySelector(".product-qty-box").textContent.trim();

        const price = parseFloat(priceText) || 0;
        const quantity = parseInt(qtyText) || 0;
        const total = price * quantity;

        const productNameText = `Product ${index + 1}`;

        const box2 = document.querySelector(".box2");

        // 🔍 Check if the product already exists in the cart
        const existingProduct = Array.from(box2.querySelectorAll(".product-name"))
            .find(p => p.textContent === productNameText);

        if (existingProduct) {
            // ✅ Product already in cart: update quantity and total
            const valueContainer = existingProduct.nextElementSibling;
            const qtyElem = valueContainer.querySelector(".value-quantity");
            const priceElem = valueContainer.querySelector(".value-final");

            const existingQty = parseInt(qtyElem.textContent.replace("qty: ", "")) || 0;
            const newQty = existingQty + quantity;
            const newTotal = newQty * price;

            qtyElem.textContent = `qty: ${newQty}`;
            priceElem.textContent = newTotal.toFixed(2);
        } else {
            // ➕ Product not in cart: create new entry
            const contentBox = document.createElement("div");
            contentBox.className = "content-box";

            contentBox.innerHTML = `
                <div class="product-name">${productNameText}</div>
                <div class="product-value">
                    <div class="value-quantity">qty: ${quantity}</div>
                    <div class="value-final">${total.toFixed(2)}</div>
                </div>
            `;

            box2.appendChild(contentBox);
        }
    });
});

