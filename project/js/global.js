// =========================
// GLOBAL NAVBAR
// =========================

function loadNavbar() {

  const container =
    document.getElementById(
      "navbar-container"
    );

  if (!container) return;

  container.innerHTML = `

    <header>

      <nav>

        <a
          href="index.html"
          class="logo"
        >
          <img src="assets/LOGO.webp" />
        </a>

        <ul class="nav-links">

          <li>
            <a href="index.html">
              Inicio
            </a>
          </li>

          <li>
            <a href="products.html">
              Productos
            </a>
          </li>

          <li>
            <a href="index.html#about">
              Nosotros
            </a>
          </li>

          <li>
            <a href="index.html#contact">
              Contacto
            </a>
          </li>

        </ul>

        <a href="cart.html" class="cart-icon">
          <img src="assets/cart.png"/>
          <span id="cart-count">0</span>
        </a>

      </nav>

    </header>

  `;
}

loadNavbar();


// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

if (form) {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    const message =
      document.getElementById("message").value;

    window.open(
      `https://wa.me/51987254670?text=${encodeURIComponent(message)}`
    );


    form.reset();
  });
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

  updateCartCount()
}

function updateCartCount() {

  const badge =
    document.getElementById(
      "cart-count"
    );

  if (!badge) return;

  const total =
    cart.reduce(
      (sum, item) =>
        sum + (item.quantity || 1),
      0
    );

  badge.textContent = total;
}

function showToast(message) {

  let toast =
    document.querySelector(".toast");

  if (!toast) {

    toast =
      document.createElement("div");

    toast.className = "toast";

    document.body.appendChild(toast);
  }

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2000);
}

updateCartCount();


// =========================
// GLOBAL FOOTER
// =========================

function loadFooter() {

  const container =
    document.getElementById(
      "footer-container"
    );

  if (!container) return;

  container.innerHTML = `

    <footer>

      <div class="footer-content">

        <div class="footer-logo">
          <img src="assets/LOGO.webp" />
        </div>

        <div class="footer-links">

          <a href="index.html">
            Home
          </a>

          <a href="products.html">
            Productos
          </a>

          <a href="cart.html">
            Carrito
          </a>

          <a href="index.html#about">
            Nosotros
          </a>

          <a href="index.html#contact">
            Contacto
          </a>

        </div>

      </div>

      <div class="copyright">
        © 2026 Thaniy. Todos los derechos reservados.
      </div>

    </footer>

  `;
}

loadFooter();