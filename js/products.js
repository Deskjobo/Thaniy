// =========================
// PRODUCTS PAGE
// =========================

let activeCategory = "Todos";

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

    const cartItem =
      cart.find(
        item =>
          item.id === product.id
      );

    container.innerHTML += `

      <div
        class="product-grid-card"
        onclick="
          window.location.href=
          'details.html?id=${product.id}'
        "
      >

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

          <div id="product-actions-${product.id}">

            ${
              !cartItem

              ?

              `
              <button
                class="details-btn"
                onclick="
                  event.stopPropagation();
                  addToCart(${product.id});
                "
              >
                Agregar
              </button>
              `

              :

              `
              <div class="quantity-controls">

                <button
                  class="qty-btn"
                  onclick="
                    event.stopPropagation();
                    decreaseQuantity(${product.id});
                  "
                >
                  -
                </button>

                <span>
                  ${cartItem.quantity}
                </span>

                <button
                  class="qty-btn"
                  onclick="
                    event.stopPropagation();
                    increaseQuantity(${product.id});
                  "
                >
                  +
                </button>

              </div>
              `
            }

          </div>

        </div>

      </div>

    `;
  });
}

function updateProductCardButton(productId) {

  const container =
    document.getElementById(
      `product-actions-${productId}`
    );

  if (!container) return;

  const item =
    cart.find(
      item => item.id === productId
    );

  if (!item) {

    container.innerHTML = `
      <button
        class="details-btn"
        onclick="
          event.stopPropagation();
          addToCart(${productId});
        "
      >
        Agregar
      </button>
    `;

    return;
  }

  container.innerHTML = `
    <div class="quantity-controls">

      <button
        class="qty-btn"
        onclick="
          event.stopPropagation();
          decreaseQuantity(${productId});
        "
      >
        -
      </button>

      <span>
        ${item.quantity}
      </span>

      <button
        class="qty-btn"
        onclick="
          event.stopPropagation();
          increaseQuantity(${productId});
        "
      >
        +
      </button>

    </div>
  `;
}


// =========================
// CATEGORY TABS
// =========================

const tabs =
  document.getElementById(
    "category-tabs"
  );

if (tabs) {

  tabs.innerHTML = "";

  categories.forEach(category => {

    tabs.innerHTML += `
      <button
        class="
          category-tab
          ${
            category === activeCategory
              ? "active"
              : ""
          }
        "
        data-category="${category}"
        onclick="
          filterByCategory(
            '${category}'
          )
        "
      >
        ${category}
      </button>
    `;
  });
}

function filterByCategory(
  category
) {

  activeCategory =
    category;

  document
    .querySelectorAll(
      ".category-tab"
    )
    .forEach(tab => {

      tab.classList.remove(
        "active"
      );

      if (
        tab.dataset.category ===
        category
      ) {

        tab.classList.add(
          "active"
        );
      }
    });

  applyFilters();
}

// =========================
// SORTING
// =========================

const sortSelect =
  document.getElementById(
    "sortSelect"
  );

function applyFilters() {

  let filteredProducts =
    [...products];

  if (
    activeCategory !== "Todos"
  ) {

    filteredProducts =
      filteredProducts.filter(
        product =>
          product.categoria ===
          activeCategory
      );
  }

  if (
    sortSelect &&
    sortSelect.value ===
    "low-high"
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
    sortSelect.value ===
    "high-low"
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

if (sortSelect) {

  sortSelect.addEventListener(
    "change",
    applyFilters
  );
}

// =========================
// URL CATEGORY FILTER
// =========================

const params =
  new URLSearchParams(
    window.location.search
  );

const selectedCategory =
  params.get("category");

if (selectedCategory) {

  activeCategory =
    selectedCategory;
}

// =========================
// INITIAL LOAD
// =========================

applyFilters();

document
  .querySelectorAll(
    ".category-tab"
  )
  .forEach(tab => {

    if (
      tab.dataset.category ===
      activeCategory
    ) {

      tab.classList.add(
        "active"
      );
    }
  });