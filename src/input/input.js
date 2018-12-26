export class MouseInput {
  constructor({ element, onMouseMove }) {
    this._onMouseMove = this._onMouseMove.bind(this);
    this.onMouseMove = onMouseMove;
    this.element = element;
    element.addEventListener("mousemove", this._onMouseMove);
  }

  remove() {
    element.removeEventListener("mousemove", this._onMouseMove);
  }

  _onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.onMouseMove({ x, y });
  }
}

export class KeyInput {
  constructor({ element, ...keys }) {
    this.keys = keys;
    this.element = element;
    this._onKeyDown = this._onKeyDown.bind(this);
    element.addEventListener("keypress", this._onKeyDown);
  }

  remove() {
    element.removeEventListener("mouseover", this._onMouseOver);
  }

  _onKeyDown(e) {
    if(typeof this.keys[e.key] === "function")
    this.keys[e.key]();
  }
}