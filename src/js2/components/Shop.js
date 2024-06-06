import { Component } from "../common/Component.js";
import { ProductList } from "./ProductList.js";

const BASE_CLASS = "shop";

export class Shop extends Component {
  render() {
    const children = $(`
      <div class="${BASE_CLASS}">
        <h1>Shopping</h1>
      </div>
    `);

    new ProductList(children);

    this.parentElement.append(children);
  }
}
