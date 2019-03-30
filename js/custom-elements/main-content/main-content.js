import { elementFactory } from '/js/element-factory.js'
import { mainContentTemplate } from './template.html.js'

export default () => {
    customElements.define('main-content-component', elementFactory(mainContentTemplate))
}
