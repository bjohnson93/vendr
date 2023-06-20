import { AppState } from "../AppState.js"

export class Snack {

  constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl
  }

  get SnackMenuOption() {
    return /*html*/ `
  <div class="col-3">
        <div>
          <img
            src="${this.imgUrl}"
            alt="snack-pic" class="img-fluid snack-img">
          <div class="d-flex justify-content-between item-div">
            <div>
            <p class="fs-3">${this.name}</p>
              <p>$${this.price.toFixed(2)}</p>
            </div>  
            <div class="buyButtonDiv pt-4">
            <button ${AppState.money < this.price ? 'disabled' : ''} onclick="app.SnacksController.selectSnack('${this.name}')" class="btn btn-success px-4">Buy</button>
            
            </div>
            </div>
        </div>
      </div>
  `
  }
  //above in the button the 'ternary' is used to disable money upon conditions, lister (.on) added to Appstate in Controller in the constructor, along with drawSnacks function
}