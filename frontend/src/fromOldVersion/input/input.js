export class MouseInput {
  constructor({ element, onMouseMove, onMouseLeave }) {
    this._onMouseMove = this._onMouseMove.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this.onMouseMove = onMouseMove;
    this.onMouseLeave = onMouseLeave;
    this.element = element;
    this.element.addEventListener("mousemove", this._onMouseMove);
    this.element.addEventListener("mouseleave", this._onMouseLeave);
  }

  remove() {
    this.element.removeEventListener("mousemove", this._onMouseMove);
  }

  _onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    this.onMouseMove({ x, y });
  }

  _onMouseLeave() {
    if (this.onMouseLeave) {
      this.onMouseLeave();
    }
  }
}

export class KeyInput {
  constructor({ element, ...keys }) {
    this.keys = keys;
    this.element = element;
    this._onKeyDown = this._onKeyDown.bind(this);
    this.element.addEventListener("keypress", this._onKeyDown);
  }

  remove() {
    this.element.removeEventListener("keypress", this._onKeyDown);
  }

  _onKeyDown(e) {
    if (typeof this.keys[e.key] === "function") this.keys[e.key]();
  }
}
