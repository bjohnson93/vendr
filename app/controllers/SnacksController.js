import { AppState } from "../AppState.js";
import { snacksService } from "../services/SnacksService.js";
import { setHTML, setText } from "../utils/Writer.js";


function _drawSnacks() {
  const snacks = AppState.snacks

  let template = ''

  snacks.forEach(s => template += s.SnackMenuOption)
  //SnackMenuOption comes from'getter' in Snacks.js

  setHTML('snackMenu', template)

  //'snackMenu' is the ID from the section in html
}

function drawChange() {
  setText('totalChange', AppState.change.toFixed(2))
}

export class SnacksController {


  //added the drawSnacks function to the constructor to get it to draw html to the page! 
  constructor() {
    console.log('the snacks controller is working');
    _drawSnacks()
    AppState.on('money', _drawSnacks)
  }

  //selectSnack() is used in html button in snacks.js
  selectSnack(snackName) {
    console.log('You clicked the buy snack button!', snackName);
    snacksService.selectSnack(snackName)
    drawChange()
  }
  // _drawSnacks()
}




