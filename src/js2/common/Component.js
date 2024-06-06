export class Component {
  #parentElement;
  #props;
  #state;
  #context;

  constructor(parentElement, props = {}, context = {}) {
    if (this.constructor.name === "Component") {
      throw new Error("Abstract class should not be instantiated");
    }

    this.#state = {};
    this.#parentElement = parentElement;
    this.#props = props;
    this.#context = context;

    this.render();
  }

  get parentElement() {
    return this.#parentElement;
  }

  get props() {
    return this.#props;
  }

  get state() {
    return this.#state;
  }

  get context() {
    return this.#context;
  }

  setState(callback) {
    this.#state = callback(this.#state);
    this.render();
  }

  render() {
    throw new Error("render method must be implemented");
  }
}
