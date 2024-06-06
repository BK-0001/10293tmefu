export class Component {
    parentElement;
    props;
    _state;
    context;
    constructor(parentElement, props = {}, _state = {}, context = {}) {
        this.parentElement = parentElement;
        this.props = props;
        this._state = _state;
        this.context = context;
        this.render();
    }
    get state() {
        return this._state;
    }
    setState(callback) {
        this._state = callback(this._state);
        this.render();
    }
}
//# sourceMappingURL=Component.js.map