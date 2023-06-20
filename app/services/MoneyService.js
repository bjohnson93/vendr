import { AppState } from "../AppState.js"


class MoneyService {
  increaseMoney() {

    AppState.money += .25
    console.log('Did the money go up?', AppState.money);
  }
}




export const moneyService = new MoneyService()