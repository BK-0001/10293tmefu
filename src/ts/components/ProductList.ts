import { Component } from "../common/Component.js";
import { CartContext } from "../context/CartContext.js";
import { ProductItem } from "./ProductItem.js";

const BASE_CLASS = "products";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface IState {
  products: Product[];
}

interface IProps {}

interface IContext {
  cart: CartContext;
}

export class ProductList extends Component<IState, IProps, IContext> {
  constructor(parentElement: JQuery<HTMLElement>) {
    super(
      parentElement,
      {},
      { products: [] },
      { cart: CartContext.getInstance() }
    );

    this.loadProducts();
  }

  async loadProducts(): Promise<void> {
    const products = await this.getProducts();

    this.setState((state) => ({ ...state, products }));
  }

  async getProducts(): Promise<Product[]> {
    const response = await fetch("http://localhost:8000/products");

    if (!response.ok) {
      throw new Error("Something went wrong while getting products");
    }

    return response.json();
  }

  render(): void {
    const children = $(`<ul class=${BASE_CLASS}></ul>`);

    (this.state.products || []).forEach((product) => {
      new ProductItem(children, {
        product,
        onAddItem: this.context.cart.addItem.bind(this.context.cart)
      });
    });

    this.parentElement.append(children);
  }
}
