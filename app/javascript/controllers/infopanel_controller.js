import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['item', 'content'];

  connect() {
    console.log('Hello from info_controller.js')
    // console.log(this.testTarget)
  }

  show(e) {
    e.preventDefault();
    // Desactivar todos los contenidos primero
    this.contentTargets.forEach((content, index) => {
      this.desactivate(index);
    });
    // Activar el contenido correspondiente al item seleccionado
    this.itemTargets.forEach((item, index) => {
      if (item === e.target) {
        this.activate(index);
      }
    });
  }
  desactivate(index) {
    this.itemTargets[index].classList.remove('active2');
    this.contentTargets[index].classList.remove('show', 'active');
  }
  activate(index) {
    this.itemTargets[index].classList.add('active2');
    this.contentTargets[index].classList.add('show', 'active');

    this.data.set('index', index);
  }
}
