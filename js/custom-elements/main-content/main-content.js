import { elementFactory } from '/js/element-factory.js'
import { mainContentTemplate } from './template.html.js'

/*
    Main content container

    Listens to window hash change events and displays
    appropriate main body content.
*/

const hashChangeHandler = event => {
    console.log('hash changed', event.newURL)
}

class mainContentComponent extends elementFactory(mainContentTemplate) {
    connectedCallback() {
        window.addEventListener('hashchange', hashChangeHandler)
    }
    disconnectedCallback() {
        window.removeEventListener('hashchange', hashChangeHandler)
    }
}

export default () => {
    customElements.define('main-content-component', mainContentComponent)
}
