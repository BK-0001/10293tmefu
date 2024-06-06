import { Component } from "../common/Component.js";
import { Product } from "./ProductList.js";

const BASE_CLASS = "product";

interface ProductItemProps {
  product: Product;
  onAddItem: (item: Product) => void;
}

export class ProductItem extends Component<{}, ProductItemProps> {
  render(): void {
    const { title, image, description, price } = this.props.product;

    const children = $(`
      <li class=${BASE_CLASS}>
        <div class="${BASE_CLASS}__img">
          <img src=${image} />
        </div>
        <div class="${BASE_CLASS}__contents">
          <div class="${BASE_CLASS}__details">
            <h4>${title}</h4>
            <p>${description}</p>
            <p class="${BASE_CLASS}__price">$${price}</p>
          </div>
          <button class="button">Quick Add</button>
        </div>
      </li>
    `);

    children.find("button").on("click", () => {
      this.props.onAddItem(this.props.product);
    });

    this.parentElement.append(children);
  }
}
