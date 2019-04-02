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
            element.innerHTML = 'a'
            break
        case '#rules':
            element.innerHTML = 'b'
            break
        case '#finance':
            element.innerHTML = 'c'
            break
        default:
            element.innerHTML = 'd'
    }
}

class mainContentComponent extends elementFactory(mainContentTemplate) {
    constructor() {
        super()
        this.mainContent = this.shadowRoot.querySelector('.main-content')
    }

    connectedCallback() {
        this.handler = this.getHashChangeHandler(this.mainContent)
        window.addEventListener('hashchange', this.handler)
    }

    disconnectedCallback() {
        window.removeEventListener('hashchange', this.handler)
    }

    getHashChangeHandler(element) {
        return function (event) {
            const urlArray = event.newURL.split('/')
            const location = urlArray[urlArray.length - 1]
            displayInElement(element, location)
        }
    }
}

export default () => {
    customElements.define('main-content-component', mainContentComponent)
}
