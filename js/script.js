// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Mensaje enviado");

    form.reset();
  });
}

// =========================
// CAROUSEL
// =========================

function loadProducts(productList) {

  const container =
    document.getElementById(
      "carousel-container"
    );

  if (!container) return;

  container.innerHTML = "";

  productList.forEach(product => {

    container.innerHTML += `
      <div class="carousel-card">

        <img
          src="${product.foto}"
          alt="${product.nombre}"
          onerror="
            this.src='https://placehold.co/400x300'
          "
        >

        <div class="carousel-info">

          <h3>
            ${product.nombre}
          </h3>

          <p>
            ${product.categoria}
          </p>

          <div class="price">

            ${
              product.precio
                ? `S/. ${product.precio}`
                : "Consultar"
            }

          </div>

          <a
            class="details-btn"
            href="details.html?id=${product.id}"
          >
            Ver detalles
          </a>

        </div>

      </div>
    `;
  });
}

// LOAD ONLY FIRST 5 PRODUCTS

loadProducts(
  products.slice(0, 5)
);

// =========================
// CAROUSEL BUTTONS
// =========================

const carousel =
  document.getElementById(
    "carousel-container"
  );

const nextBtn =
  document.getElementById(
    "nextBtn"
  );

const prevBtn =
  document.getElementById(
    "prevBtn"
  );

if (nextBtn && carousel) {

  nextBtn.addEventListener(
    "click",
    () => {

      const card =
        carousel.querySelector(
          ".carousel-card"
        );

      if (!card) return;

      const scrollAmount =
        card.offsetWidth + 25;

      carousel.scrollBy({

        left: scrollAmount * 3,

        behavior: "smooth"

      });
    }
  );
}

if (prevBtn && carousel) {

  prevBtn.addEventListener(
    "click",
    () => {

      const card =
        carousel.querySelector(
          ".carousel-card"
        );

      if (!card) return;

      const scrollAmount =
        card.offsetWidth + 25;

      carousel.scrollBy({

        left: -(scrollAmount * 3),

        behavior: "smooth"

      });
    }
  );
}

// =========================
// PRODUCTS PAGE
// =========================

function renderProductsGrid(
  productList
) {

  const container =
    document.getElementById(
      "products-grid"
    );

  if (!container) return;

  container.innerHTML = "";

  productList.forEach(product => {

    container.innerHTML += `
      <div class="product-grid-card">

        <img
          src="${product.foto}"
          alt="${product.nombre}"
          onerror="
            this.src='https://placehold.co/400x300'
          "
        >

        <div class="product-grid-info">

          <h3>
            ${product.nombre}
          </h3>

          <p>
            ${product.categoria}
          </p>

          <div class="price">

            ${
              product.precio
                ? `S/. ${product.precio}`
                : "Consultar"
            }

          </div>

          <a
            class="details-btn"
            href="details.html?id=${product.id}"
          >
            Ver detalles
          </a>

        </div>

      </div>
    `;
  });
}

// INITIAL GRID

if (
  document.getElementById(
    "products-grid"
  )
) {

  renderProductsGrid(products);
}

// =========================
// SORTING
// =========================

const categoryFilter =
  document.getElementById(
    "categoryFilter"
  );

const sortSelect =
  document.getElementById(
    "sortSelect"
  );

// LOAD CATEGORY OPTIONS

if (categoryFilter) {

  categories
    .filter(c => c !== "Todos")
    .forEach(category => {

      categoryFilter.innerHTML += `
        <option value="${category}">
          ${category}
        </option>
      `;
    });
}

function applyFilters() {

  let filteredProducts =
    [...products];

  // CATEGORY FILTER

  if (
    categoryFilter &&
    categoryFilter.value !== "Todos"
  ) {

    filteredProducts =
      filteredProducts.filter(
        product =>
          product.categoria ===
          categoryFilter.value
      );
  }

  // SORTING

  if (
    sortSelect &&
    sortSelect.value === "low-high"
  ) {

    filteredProducts.sort(
      (a, b) =>
        (a.precio || 0)
        -
        (b.precio || 0)
    );
  }

  if (
    sortSelect &&
    sortSelect.value === "high-low"
  ) {

    filteredProducts.sort(
      (a, b) =>
        (b.precio || 0)
        -
        (a.precio || 0)
    );
  }

  renderProductsGrid(
    filteredProducts
  );
}

// EVENTS

if (categoryFilter) {

  categoryFilter.addEventListener(
    "change",
    applyFilters
  );
}

if (sortSelect) {

  sortSelect.addEventListener(
    "change",
    applyFilters
  );
}


// =========================
// CART
// =========================

let cart =
  JSON.parse(
    localStorage.getItem("cart")
  ) || [];

function saveCart() {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}

function showToast(message) {

  let toast =
    document.querySelector(".toast");

  if (!toast) {

    toast =
      document.createElement("div");

    toast.classList.add("toast");

    document.body.appendChild(toast);
  }

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2000);
}

function isInCart(id) {

  return cart.some(
    item => item.id === id
  );
}

function addToCart(id) {

  const product =
    products.find(
      p => p.id === id
    );

  if (!product) return;

  if (!isInCart(id)) {

    cart.push(product);

    saveCart();

    showToast(
      "Producto agregado"
    );
  }

  updateCartButton(id);
}

function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();

  showToast(
    "Producto eliminado"
  );

  updateCartButton(id);

  renderCartPage();
}

function updateCartButton(id) {

  const button =
    document.getElementById(
      "cart-action-btn"
    );

  if (!button) return;

  if (isInCart(id)) {

    button.textContent =
      "Eliminar del carrito";

    button.onclick = () =>
      removeFromCart(id);

  } else {

    button.textContent =
      "Agregar al carrito";

    button.onclick = () =>
      addToCart(id);
  }
}

// =========================
// DETAILS PAGE
// =========================

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

      <button
        class="cart-action-btn"
        id="cart-action-btn"
      >
      </button>

    </div>
  `;

  updateCartButton(id);
}

renderDetailsPage();




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

        <button
          class="delete-btn"
          onclick="
            removeFromCart(${item.id})
          "
        >
          Eliminar
        </button>

      </div>
    `;
  });
}

renderCartPage();

