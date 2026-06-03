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
// CATEGORY CAROUSEL
// =========================
{
function renderCategoriesCarousel() {

  const container =
    document.getElementById(
      "categories-carousel"
    );

  if (!container) return;

  container.innerHTML = "";

  categories
    .filter(category =>
      category !== "Todos"
    )
    .forEach(category => {

      const categoryProduct =
        products.find(
          product =>
            product.categoria === category
        );

      const image =
        categoryProduct
          ? categoryProduct.foto
          : "https://placehold.co/600x400";

      container.innerHTML += `

        <a
          class="category-carousel-card"
          href="products.html?category=${encodeURIComponent(category)}"
        >

          <img
            src="${image}"
            alt="${category}"
            onerror="
              this.src='https://placehold.co/600x400'
            "
          >

          <div class="category-card-info">

            <h3>
              ${category}
            </h3>

            <span>
              Ver productos
            </span>

          </div>

        </a>

      `;
    });
}

renderCategoriesCarousel();

// =========================
// CATEGORY CAROUSEL BUTTONS
// =========================

const categoriesCarousel =
  document.getElementById(
    "categories-carousel"
  );

const categoriesNextBtn =
  document.getElementById(
    "categoriesNextBtn"
  );

const categoriesPrevBtn =
  document.getElementById(
    "categoriesPrevBtn"
  );

if (
  categoriesNextBtn &&
  categoriesCarousel
) {

  categoriesNextBtn.addEventListener(
    "click",
    () => {

      const card =
        categoriesCarousel.querySelector(
          ".category-carousel-card"
        );

      if (!card) return;

      const scrollAmount =
        card.offsetWidth + 25;

      categoriesCarousel.scrollBy({

        left: scrollAmount * 3,

        behavior: "smooth"

      });
    }
  );
}

if (
  categoriesPrevBtn &&
  categoriesCarousel
) {

  categoriesPrevBtn.addEventListener(
    "click",
    () => {

      const card =
        categoriesCarousel.querySelector(
          ".category-carousel-card"
        );

      if (!card) return;

      const scrollAmount =
        card.offsetWidth + 25;

      categoriesCarousel.scrollBy({

        left: -(scrollAmount * 3),

        behavior: "smooth"

      });
    }
  );
}}