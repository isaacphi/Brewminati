import { elementFactory } from '/js/element-factory.js'
import { pageLayoutTemplate } from './template.html.js'

export default () => {
    customElements.define('page-layout-component', elementFactory(pageLayoutTemplate))
}
