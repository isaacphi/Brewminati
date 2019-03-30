import { elementFactory } from '/js/element-factory.js'
import { headerTemplate } from './template.html.js'

/*
    Page header

    No functionality.
*/

export default () => {
    customElements.define('header-component', elementFactory(headerTemplate))
}
