import { Component } from "../common/Component.js";
import { CartContext } from "../context/CartContext.js";
import { CartItemList } from "./CartItemList.js";

const BASE_CLASS = "cart";

interface IContext {
  cart: CartContext;
}

export class Cart extends Component<{}, {}, IContext> {
  constructor(parentElement: JQuery<HTMLElement>) {
    super(
      parentElement,
      {},
      { products: [] },
      { cart: CartContext.getInstance() }
    );

    this.context.cart.setOnStateChange(() => {
      $(`.${BASE_CLASS}`).remove();
      this.render();
    });
  }

  render(): void {
    const children = $(`
      <div class="${BASE_CLASS}">
        <h1>Cart</h1>
        
        <div class="${BASE_CLASS}__summary">
          <h2>Summary</h2>
          
          <div class="${BASE_CLASS}__total-price">
            <h3>Total Price:</h3>
            <h3>$${this.context.cart.getTotalPrice()}</h3>
          </div>
        </div>
      </div>
    `);

    new CartItemList(children, {
      items: this.context.cart.items,
      onRemoveItem: this.context.cart.removeItem.bind(this.context.cart)
    });

    this.parentElement.append(children);
  }
}
