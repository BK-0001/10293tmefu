import { Component } from "../common/Component.js";

const BASE_CLASS = "header";

export class Header extends Component {
  render() {
    const children = $(`
      <header class="${BASE_CLASS}">
        <h1>Fake Store</h1>
      </header>
    `);

    this.parentElement.append(children);
  }
}
