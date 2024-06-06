export class CartContext {
    static instance = null;
    _items = [];
    _stateChangeFunctions = [];
    constructor() { }
    static getInstance() {
        if (!CartContext.instance) {
            CartContext.instance = new CartContext();
        }
        return CartContext.instance;
    }
    get items() {
        return this._items;
    }
    getTotalPrice() {
        return this._items.reduce((prev, { price, quantity }) => quantity * price + prev, 0);
    }
    addItem(cartItem) {
        const item = this._items.find((item) => item.id === cartItem.id);
        if (item) {
            item.quantity += 1;
        }
        else {
            this._items.push({ ...cartItem, quantity: 1 });
        }
        console.log(this._items);
        this.updateOnStateChange();
    }
    removeItem(itemId) {
        const itemIndex = this._items.findIndex((item) => item.id === itemId);
        const item = this._items[itemIndex];
        if (item.quantity > 1) {
            item.quantity -= 1;
        }
        else {
            this._items.splice(itemIndex, 1);
        }
        this.updateOnStateChange();
    }
    setOnStateChange(stateChangeFunction) {
        this._stateChangeFunctions.push(stateChangeFunction);
    }
    updateOnStateChange() {
        this._stateChangeFunctions.forEach((stateChangeFunction) => {
            stateChangeFunction();
        });
    }
}
//# sourceMappingURL=CartContext.js.map