import { elementFactory } from '/js/element-factory.js'
import { template } from './template.html.js'

/*
    Spreadsheet

    Displays a full-width spreadsheet

    addRow(parent: Element, data: Array<String>): null
    Adds a row to the table.
*/

export class spreadsheetTableComponent extends elementFactory(brewListTemplate) {
    static get tagName() {
	return 'spreadsheet-table'
    }
    
    constructor() {
        super()
    }

    connectedCallback() {
    }

    addRow(parent, data) {
	const tr = document.createElement('tr')
	data.forEach(text => {
	    const td = document.createElement('td')
	    if (this.isLink(text)) {
		const a = document.createElement('a')
		a.setAttribute('href', text)
		a.textContent = text
		td.appendChild(a)
	    } else {
		td.textContent = text	    
	    }
	    tr.appendChild(td)
	})
	parent.appendChild(tr)
    }

    isLink(text) {
	const urlExpression = '^(https?:\/\/)?([0-9a-zA-Z]+[\.]).*/'
	const regex = new RegExp(urlExpression);
	return regex.test(text)
    }
}

customElements.define(spreadsheetTableComponent.tagName, spreadsheetTableComponent)
