import { Controller } from 'stimulus'
import { gsap } from 'gsap';

export default class extends Controller {
  connect() {
    console.log('Hello from loader_controller.js');
    this.fadeOutLoader();
  }

  fadeOutLoader() {
    const loader = this.element;

    gsap.to(loader, {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
      onComplete: () => {
        loader.remove();
        document.documentElement.style.overflow = "auto"; // Habilitar el desplazamiento
      },
      onStart: () => {
        document.documentElement.style.overflow = "hidden"; // Deshabilitar el desplazamiento
      },
    });
  }
}
