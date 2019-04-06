import { elementFactory } from '/js/element-factory.js'
import { mainContentTemplate } from './template.html.js'

/*
    Main content container

    Sets a window hash change event listener that displays
    appropriate main body content.
*/

const displayInElement = (element, location) => {
    switch (location) {
        case '#':
            element.innerHTML = '<about-component/>'
            break
        case '#rules':
            element.innerHTML = 'b'
            break
        case '#finance':
            element.innerHTML = 'c'
            break
        case '#brew-list':
            element.innerHTML = '<brew-list-component />'
            break
        default:
            element.innerHTML = 'd'
    }
}

class mainContentComponent extends elementFactory(mainContentTemplate) {
    constructor() {
        super()
        this.mainContent = this.shadowRoot.querySelector('.main-content')
        this.hashChangeHandler = this.hashChangeHandler.bind(this)
    }

    connectedCallback() {
        window.addEventListener('hashchange', this.hashChangeHandler)
    }

    disconnectedCallback() {
        window.removeEventListener('hashchange', this.handler)
    }

    hashChangeHandler(event) {
        const urlArray = event.newURL.split('/')
        const location = urlArray[urlArray.length - 1]
        displayInElement(this.mainContent, location)
    }
}

export default () => {
    customElements.define('main-content-component', mainContentComponent)
}
