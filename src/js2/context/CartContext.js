export class CartContext {
  #items;
  #stateChangeFunctions;

  constructor() {
    this.#items = [];
    this.#stateChangeFunctions = [];
  }

  static getInstance() {
    if (!CartContext.instance) {
      CartContext.instance = new CartContext();
    }
    return CartContext.instance;
  }

  get items() {
    return this.#items;
  }

  getTotalPrice() {
    return this.#items.reduce(
      (prev, { price, quantity }) => quantity * price + prev,
      0
    );
  }

  addItem(cartItem) {
    const item = this.#items.find((item) => item.id === cartItem.id);

    if (item) {
      item.quantity += 1;
    } else {
      this.#items.push({ ...cartItem, quantity: 1 });
    }

    this.#updateOnStateChange();
  }

  removeItem(itemId) {
    const itemIndex = this.#items.findIndex((item) => item.id === itemId);
    const item = this.#items[itemIndex];

    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.#items.splice(itemIndex, 1);
    }

    this.#updateOnStateChange();
  }

  setOnStateChange(stateChangeFunction) {
    this.#stateChangeFunctions.push(stateChangeFunction);
  }

  #updateOnStateChange() {
    this.#stateChangeFunctions.forEach((stateChangeFunction) => {
      stateChangeFunction();
    });
  }
}
