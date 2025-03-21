class BookPreview extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow;
  }
}

customElements.define("book-preview", BookPreview);
