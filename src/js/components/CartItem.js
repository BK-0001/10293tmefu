import { Component } from "../common/Component.js";
const BASE_CLASS = "cart-item";
export class CartItem extends Component {
    render() {
        const { id, title, image, price, quantity } = this.props.cartItem;
        const children = $(`
      <li class=${BASE_CLASS}>
        <div class="${BASE_CLASS}__img">
          <img src=${image} />
        </div>
        <div class="${BASE_CLASS}__contents">
          <h4>${title}</h4>
          <div class="${BASE_CLASS}__details">
            <p class="${BASE_CLASS}__price">$${price}</p>
            <p class="${BASE_CLASS}__quantity"> x ${quantity}</p>
            <p class="${BASE_CLASS}__price">$${price * quantity}</p>
          </div>
          <button class="button">Remove</button>
        </div>
      </li>
    `);
        children.find("button").on("click", () => {
            this.props.onRemoveItem(id);
        });
        this.parentElement.append(children);
    }
}
//# sourceMappingURL=CartItem.js.map