import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['loading']

  load(e) {
    const pepi = this.loadingTarget.classList.toggle("loader2")
    const pipi = this.loadingTarget.classList.remove("loaders")


    console.log(pepi)


  }
}
