import { elementFactory } from '/js/element-factory.js'
import { mainContentTemplate } from './template.html.js'

let mainContentElement = elementFactory(mainContentTemplate)
mainContentElement.connectedCallback = () => {
    console.log('connected')
}
mainContentElement.disconnectedCallback = () => {
    console.log('disconnected')
}
mainContentElement.adoptedCallback = () => {
    console.log('adopted')
}
mainContentElement.attributeChangedCallback = () => {
    console.log('changed')
}


export default () => {
    customElements.define('main-content-component', mainContentElement)
}
