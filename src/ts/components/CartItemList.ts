import { Component } from "../common/Component.js";
import { ICartItem } from "../context/CartContext.js";
import { CartItem } from "./CartItem.js";

const BASE_CLASS = "cart-items";

interface CartItemListProps {
  items: ICartItem[];
  onRemoveItem: (id: string) => void;
}

export class CartItemList extends Component<{}, CartItemListProps> {
  render() {
    const { items, onRemoveItem } = this.props;

    const isCartEmpty = items.length < 1;
    let children = $(
      `<h3 class="${BASE_CLASS}">Please add some items 😎😎😎</h3>`
    );

    if (!isCartEmpty) {
      children = $(`<ul class=${BASE_CLASS}></ul>`);

      items.forEach((cartItem) => {
        new CartItem(children, { cartItem, onRemoveItem });
      });
    }

    this.parentElement.append(children);
  }
}
