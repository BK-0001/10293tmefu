export abstract class Component<
  State extends object = {},
  Props extends object = {},
  Context extends object = {}
> {
  constructor(
    protected readonly parentElement: JQuery<HTMLElement>,
    protected readonly props = <Props>{},
    private _state = <State>{},
    protected readonly context = <Context>{}
  ) {
    this.render();
  }

  abstract render(): void;

  get state(): State {
    return this._state;
  }

  setState(callback: (state: State) => State): void {
    this._state = callback(this._state);
    this.render();
  }
}
