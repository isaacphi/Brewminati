export const elementFactory = layout => class extends HTMLElement {
    constructor() {
      super();
  
      const template = document.createElement("template")
      template.innerHTML = layout
  
      const shadowRoot = this.attachShadow({mode: 'open'})
      shadowRoot.appendChild(
        template.content.cloneNode(true)
      )
    }
  }
