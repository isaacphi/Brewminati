import { pageLayoutTemplate } from '/templates/page-layout-component.html.js'
import { headerTemplate } from '/templates/header-component.html.js'
import { navTemplate } from '/templates/nav-component.html.js'
import { mainContentTemplate } from '/templates/main-content-component.html.js'

const elementFactory = layout => class extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template")
    template.innerHTML = layout

    const shadowRoot = this.attachShadow({mode: 'open'})
    shadowRoot.appendChild(
      template.content.cloneNode(true)
    );  
  }
}

const customElementTemplates = [
  {name: 'page-layout-component', template: pageLayoutTemplate},
  {name: 'header-component', template: headerTemplate},
  {name: 'nav-component', template: navTemplate} ,
  {name: 'main-content-component', template: mainContentTemplate},
]

customElementTemplates.forEach(
  e => customElements.define(e.name, elementFactory(e.template))
)
