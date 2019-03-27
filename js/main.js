import { pageLayoutTemplate } from '/templates/page-layout.js'

customElements.define('page-layout',
  class extends HTMLElement {
    constructor() {
      super();

      let t = document.createElement("template")
      t.id = 'page-layout'
      t.innerHTML = pageLayoutTemplate

      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(
        t.content.cloneNode(true)
      );
    }
  }
);
