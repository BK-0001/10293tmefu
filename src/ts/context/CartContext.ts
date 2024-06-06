import { Product } from "../components/ProductList.js";

export interface ICartItem extends Product {
  quantity: number;
}

type stateChangeFunction = () => void;

export class CartContext {
  private static instance: CartContext | null = null;

  private _items: ICartItem[] = [];
  private _stateChangeFunctions: stateChangeFunction[] = [];

  private constructor() {}

  static getInstance(): CartContext {
    if (!CartContext.instance) {
      CartContext.instance = new CartContext();
    }
    return CartContext.instance;
  }

  get items(): ICartItem[] {
    return this._items;
  }

  getTotalPrice(): number {
    return this._items.reduce(
      (prev, { price, quantity }) => quantity * price + prev,
      0
    );
  }

  addItem(cartItem: Product): void {
    const item = this._items.find((item) => item.id === cartItem.id);

    if (item) {
      item.quantity += 1;
    } else {
      this._items.push({ ...cartItem, quantity: 1 });
    }

    console.log(this._items);

    this.updateOnStateChange();
  }

  removeItem(itemId: string): void {
    const itemIndex = this._items.findIndex((item) => item.id === itemId);
    const item = this._items[itemIndex];

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this._items.splice(itemIndex, 1);
    }

    this.updateOnStateChange();
  }

  setOnStateChange(stateChangeFunction: stateChangeFunction): void {
    this._stateChangeFunctions.push(stateChangeFunction);
  }

  private updateOnStateChange(): void {
    this._stateChangeFunctions.forEach((stateChangeFunction) => {
      stateChangeFunction();
    });
  }
}
