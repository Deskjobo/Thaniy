// =========================
// DETAILS PAGE
// =========================
function updateCartButton(id) {

  const container =
    document.getElementById(
      "cart-action-btn-container"
    );

  if (!container) return;

  const item =
    cart.find(
      item => item.id === id
    );

  if (!item) {

    container.innerHTML = `
      <button
        class="cart-action-btn"
        onclick="addToCart(${id})"
      >
        Agregar al carrito
      </button>
    `;

    return;
  }

  container.innerHTML = `
    <div class="detail-quantity-controls">

      <button
        class="qty-btn"
        onclick="decreaseQuantity(${id})"
      >
        -
      </button>

      <span class="qty-value">
        ${item.quantity}
      </span>

      <button
        class="qty-btn"
        onclick="increaseQuantity(${id})"
      >
        +
      </button>

    </div>
  `;
}





function renderDetailsPage() {

  const container =
    document.getElementById(
      "details-page"
    );

  if (!container) return;

  const params =
    new URLSearchParams(
      window.location.search
    );

  const id =
    Number(
      params.get("id")
    );

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) {

    container.innerHTML = `
      <h2>
        Producto no encontrado
      </h2>
    `;

    return;
  }

  container.innerHTML = `
    <div class="detail-image">

      <img
        src="${product.foto}"
        alt="${product.nombre}"
        onerror="
          this.src='https://placehold.co/800x800'
        "
      >

    </div>

    <div class="detail-info">

      <h2>
        ${product.nombre}
      </h2>

      <p>

        <strong>
          Categoría:
        </strong>

        ${product.categoria}

      </p>

      <div class="price">

        ${
          product.precio
            ? `S/. ${product.precio}`
            : "Consultar"
        }

      </div>

      <h3>
        Beneficios
      </h3>

      <ul>

        ${
          product.beneficios
            .map(beneficio =>
              `<li>${beneficio}</li>`
            )
            .join("")
        }

      </ul>

    <div id="cart-action-btn-container">
    </div>

    </div>
  `;

  updateCartButton(id);
}

renderDetailsPage();