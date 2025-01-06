import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["content"];

  connect() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      this.showContent(hash);
      this.highlightProductName(hash);
    }
  }

  show(event) {
    event.preventDefault();
    const productName = event.currentTarget.dataset.productName;
    this.showContent(productName);
    this.updateURL(productName);
    this.highlightProductName(productName);
  }

  showContent(productName) {
    // Ocultar todos los contenidos
    this.contentTargets.forEach((content) => {
      content.style.display = 'none';
    });

    // Mostrar el contenido correspondiente
    const contentToShow = this.contentTargets.find(
      (content) => content.dataset.productName === productName
    );
    if (contentToShow) {
      contentToShow.style.display = 'block';
      // Encontrar el contenedor padre de todos los elementos de contenido
      const container = contentToShow.closest("[data-controller='product']");

      // Mover el contenido mostrado al principio de los elementos de contenido dentro del contenedor padre
      // Asumimos que todos los contenidos son hermanos directos en el DOM
      const firstContentTarget = container.querySelector("[data-product-target='content']");
      if (firstContentTarget) {
        container.insertBefore(contentToShow, firstContentTarget);
      }
    }
  }

  updateURL(productName) {
    const url = new URL(window.location);
    url.hash = productName;
    history.pushState({}, '', url);
  }

  highlightProductName(productName) {
    // Remover la clase activa de todos los elementos
    this.element.querySelectorAll('.font2').forEach((element) => {
      element.classList.remove('active');
    });

    // Agregar la clase activa al elemento clickeado
    const activeElement = this.element.querySelector(
      `li[data-product-name="${productName}"] .font2`
    );
    if (activeElement) {
      activeElement.classList.add('active');
    }
  }
}
