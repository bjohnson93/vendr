// @ts-ignore
import { Snack } from "./models/Snacks.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  money = 0

  change = 0

  /** @type {import('./models/Snacks.js').Snack[]} */
  snacks = [
    new Snack({ name: 'Jerky', price: 3.50, imgUrl: 'https://images.unsplash.com/photo-1652209695374-7a91c243f12f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amVya3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Chip and Salsa', price: 4.00, imgUrl: 'https://images.unsplash.com/photo-1628791392322-de3fc6348d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpcHMlMjBhbmQlMjBzYWxzYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Cheese Sticks', price: 6.00, imgUrl: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJpZWQlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
    new Snack({ name: 'Fried Shrimp', price: 7.00, imgUrl: 'https://images.unsplash.com/photo-1579887829114-282b4fa31072?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RnJpZWQlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' }),
  ]



  // NOTE Used to load initial data


  init() {

  }


}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
function init() {
  throw new Error("Function not implemented.")
}

