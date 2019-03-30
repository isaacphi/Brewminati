import { elementFactory } from '/js/element-factory.js'
import { navTemplate } from './template.html.js'

export default () => {
    customElements.define('nav-component', elementFactory(navTemplate))
}
