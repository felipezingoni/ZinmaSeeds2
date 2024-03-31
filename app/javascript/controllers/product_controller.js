import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["content"];

  show(event) {
    event.preventDefault();
    const productName = event.currentTarget.dataset.productName;

    // Ocultar todos los contenidos
    this.contentTargets.forEach((content) => {
      content.style.display = 'none';
    });

    // Encontrar el contenido a mostrar basado en productName
    const contentToShow = this.contentTargets.find(content => content.dataset.productName === productName);
    if (contentToShow) {
      contentToShow.style.display = 'block'; // Mostrar el contenido seleccionado

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
}
