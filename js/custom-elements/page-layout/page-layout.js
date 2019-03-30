import { elementFactory } from '/js/element-factory.js'
import { pageLayoutTemplate } from './template.html.js'

/*
    Main page template

    Uses a css grid layout.
*/

export default () => {
    customElements.define('page-layout-component', elementFactory(pageLayoutTemplate))
}
