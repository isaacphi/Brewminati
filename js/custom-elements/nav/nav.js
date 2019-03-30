import { elementFactory } from '/js/element-factory.js'
import { navTemplate } from './template.html.js'

/*
    Page navigation

    Sets the window.location.hash with <a> elements.
*/

export default () => {
    customElements.define('nav-component', elementFactory(navTemplate))
}
