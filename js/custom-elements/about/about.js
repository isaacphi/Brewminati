import { elementFactory } from '/js/element-factory.js'
import { aboutTemplate } from './template.html.js'

/*
    About page

    Loads content from google doc and displays it
*/

class aboutComponent extends elementFactory(aboutTemplate) {
    constructor() {
        super()
        this.aboutContent = this.shadowRoot.querySelector('.about')
    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }
}

export default () => {
    customElements.define('about-component', aboutComponent)
}
