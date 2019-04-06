import { elementFactory } from '/js/element-factory.js'
import { brewListTemplate } from './template.html.js'

/*
    Brew List

    Loads content from google sheet and displays it
*/

class brewListComponent extends elementFactory(brewListTemplate) {
    constructor() {
        super()
        this.brewListContent = this.shadowRoot.querySelector('.brew-list')
    }

    connectedCallback() {
        console.log('brew-list')
    }

    disconnectedCallback() {
        console.log('brew-list disconnected')
    }
}

export default () => {
    customElements.define('brew-list-component', brewListComponent)
}
