import { Component } from "./common/Component.js";
import { Cart } from "./components/Cart.js";
import { Header } from "./components/Header.js";
import { Shop } from "./components/Shop.js";

export class App extends Component {
  render() {
    new Header(this.parentElement);

    const children = $(`<main></main>`);
    new Shop(children);
    new Cart(children);

    this.parentElement.append(children);
  }
}
