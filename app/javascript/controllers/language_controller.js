import { Controller } from 'stimulus'

export default class extends Controller {
  // // static target = ['boton']

  connect() {
    console.log('Hello from language_controller.js')
    // console.log(this.testTarget)
  }

  // toggle(e) {
  //   e.preventDefault();
  //   this.element.classList.toggle("active");
  // }

  static targets = ["element", "flag"];

  toggle(event) {
    event.preventDefault();
    this.elementTargets.forEach((element) => {
      if (element.classList.contains("hide")) {
        element.classList.remove("hide");
        element.classList.add("block");
      } else {
        element.classList.add("hide");
        element.classList.remove("block");
      }
    });

  }

  show(event) {
    this.flagTargets.forEach((flag) => {
      if(flag.classList.contains("arg")){
        console.log("arg")
      } else {
        console.log("usa")
      }
    })
  }
}
