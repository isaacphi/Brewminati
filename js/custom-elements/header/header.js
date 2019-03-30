import { elementFactory } from '/js/element-factory.js'
import { headerTemplate } from './template.html.js'

export default () => {
    customElements.define('header-component', elementFactory(headerTemplate))
}
