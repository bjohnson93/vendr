import { AppState } from "../AppState.js";
import { moneyService } from "../services/MoneyService.js";
import { setText } from "../utils/Writer.js";


function _drawMoney() {

  // console.log(AppState.money, 'here is my money from the app state');

  setText('totalMoney', AppState.money.toFixed(2))
  //toFixed(2) adds the two decimals for $
}

export class MoneyController {
  constructor() {
    // console.log('Money Controller is working?');
    AppState.on('money', _drawMoney)
  }

  increaseMoney() {
    // console.log('increase money button was clicked');
    moneyService.increaseMoney()
    _drawMoney()
  }
}

