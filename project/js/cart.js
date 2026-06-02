
// =========================
// ADD / REMOVE
// =========================

function addToCart(id) {

  const item =
    cart.find(
      item => item.id === id
    );

  if (item) {

    item.quantity++;

  } else {

    const product =
      products.find(
        p => p.id === id
      );

    if (!product) return;

    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();

  updateCartCount();

  showToast(
    "Producto agregado"
  );

  if (
  typeof updateProductCardButton ===
  "function"
) {

  updateProductCardButton(id);
}

if (
  typeof renderDetailsPage ===
  "function"
) {

  renderDetailsPage();
}

if (
  typeof renderCartPage ===
  "function"
) {

  renderCartPage();
}
}

function removeFromCart(id) {

  cart =
    cart.filter(
      item => item.id !== id
    );

  saveCart();

  updateCartCount();

  showToast(
    "Producto eliminado"
  );

  if (
  typeof updateProductCardButton ===
  "function"
) {

  updateProductCardButton(id);
}

if (
  typeof renderDetailsPage ===
  "function"
) {

  renderDetailsPage();
}

if (
  typeof renderCartPage ===
  "function"
) {

  renderCartPage();
}
}


// =========================
// QUANTITY
// =========================

function increaseQuantity(id) {

  const item =
    cart.find(
      item => item.id === id
    );

  if (!item) return;

  item.quantity++;

  saveCart();

  updateCartCount();

  if (
  typeof updateProductCardButton ===
  "function"
) {

  updateProductCardButton(id);
}

if (
  typeof renderDetailsPage ===
  "function"
) {

  renderDetailsPage();
}

if (
  typeof renderCartPage ===
  "function"
) {

  renderCartPage();
}
}

function decreaseQuantity(id) {

  const item =
    cart.find(
      item => item.id === id
    );

  if (!item) return;

  item.quantity--;

  if (item.quantity <= 0) {

    cart =
      cart.filter(
        p => p.id !== id
      );

    showToast(
      "Producto eliminado"
    );
  }

  saveCart();

  updateCartCount();

  if (
  typeof updateProductCardButton ===
  "function"
) {

  updateProductCardButton(id);
}

if (
  typeof renderDetailsPage ===
  "function"
) {

  renderDetailsPage();
}

if (
  typeof renderCartPage ===
  "function"
) {

  renderCartPage();
}
}

updateCartCount();

// =========================
// TOTAL
// =========================

function calculateTotal() {

  return cart.reduce(

    (total, item) =>

      total +
      (
        (item.precio || 0)
        * item.quantity
      ),

    0
  );
}

// =========================
// CART PAGE
// =========================

function renderCartPage() {

  const container =
    document.getElementById(
      "cart-list"
    );

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {

    container.innerHTML = `
      <p>
        El carrito está vacío
      </p>
    `;

    const totalElement =
      document.getElementById(
        "cart-total"
      );

    if (totalElement) {

      totalElement.textContent =
        "S/. 0.00";
    }

    return;
  }

  cart.forEach(item => {

    container.innerHTML += `
      <div class="cart-item">

        <div class="cart-item-left">

          <img
            src="${item.foto}"
            alt="${item.nombre}"
            onerror="
              this.src='https://placehold.co/200x200'
            "
          >

          <div>

            <h3>
              ${item.nombre}
            </h3>

            <p>
              ${item.categoria}
            </p>

            <div class="price">
              ${
                item.precio
                  ? `S/. ${item.precio}`
                  : "Consultar"
              }
            </div>

          </div>

        </div>

        <div class="cart-actions">

          <div class="quantity-controls">

            <button
              class="qty-btn"
              onclick="decreaseQuantity(${item.id})"
            >
              -
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              class="qty-btn"
              onclick="increaseQuantity(${item.id})"
            >
              +
            </button>

          </div>

          <button
            class="delete-btn"
            onclick="removeFromCart(${item.id})"
          >
            Eliminar
          </button>

        </div>

      </div>
    `;
  });

  const totalElement =
    document.getElementById(
      "cart-total"
    );

  if (totalElement) {

    totalElement.textContent =
      `S/. ${calculateTotal().toFixed(2)}`;
  }
}

// =========================
// WHATSAPP CHECKOUT
// =========================

function checkoutWhatsapp() {

  if (cart.length === 0) {

    alert(
      "El carrito está vacío"
    );

    return;
  }

  let total = 0;

  let message =
`Hola, deseo realizar el siguiente pedido:%0A%0A`;

  cart.forEach(item => {

    const subtotal =
      (item.precio || 0)
      * item.quantity;

    total += subtotal;

    message +=
`${item.nombre}%0A`;

    message +=
`Cantidad: ${item.quantity}%0A`;

    message +=
`Subtotal: S/. ${subtotal.toFixed(2)}%0A%0A`;
  });

  message +=
`TOTAL: S/. ${total.toFixed(2)}`;

  window.location.href =
`https://wa.me/51987254670?text=${message}`;
}

// =========================
// EVENTS
// =========================

const checkoutBtn =
  document.getElementById(
    "checkout-btn"
  );

if (checkoutBtn) {

  checkoutBtn.addEventListener(
    "click",
    checkoutWhatsapp
  );
}

// =========================
// INIT
// =========================

updateCartCount();

renderCartPage();