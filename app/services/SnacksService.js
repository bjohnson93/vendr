import { AppState } from "../AppState.js";
import { Pop } from "../utils/Pop.js";
import { setText } from "../utils/Writer.js";

class SnacksService {
  selectSnack(snackName) {
    const snacks = AppState.snacks

    const foundSnack = snacks.find(s => s.name == snackName)
    console.log('Did I find a snack by clicking the buy button?', foundSnack);

    if (AppState.money < foundSnack.price) {
      Pop.error("You need more coins!")
      return
    }
    if (AppState.money >= foundSnack.price) {
      // console.log('you have enough money for ', foundSnack);
      AppState.money -= foundSnack.price

      AppState.change += AppState.money
      console.log('this is the change from the appstate', AppState.change);
      AppState.money = 0

    }
  }
}
export const snacksService = new SnacksService()