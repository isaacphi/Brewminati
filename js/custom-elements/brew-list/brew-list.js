import { elementFactory } from '/js/element-factory.js'
import { brewListTemplate } from './template.html.js'

/*
    Brew List

    Loads content from google sheet and displays it
*/

const spreadsheetURL = 'https://sheets.googleapis.com/v4/spreadsheets/1DmJAQzqt9x4c6nRPPQMfIkglVsRWbQLidJgRd8UjQF8/values/A:N?key=AIzaSyAgDQrJ5IWxJjg6aP9AHkvQH96bRb5XVmU'

export class brewListComponent extends elementFactory(brewListTemplate) {
    static get tagName() {
	return 'brew-list-tag-name'
    }
    
    constructor() {
        super()
        this.brewListContent = this.shadowRoot.querySelector('.brew-list')
    }

    connectedCallback() {
	this.fetchBrewList()
    }

    fetchBrewList() {
	fetch(spreadsheetURL)
	    .then(response => {
		return response.json();
	    })
	    .then(data => {
		if (data.values.length === 0) { return }
		addRow(this.brewListContent, data.values[0])
		const rows = data.values.slice(1).reverse()
		rows.forEach(row => {
		    addRow(this.brewListContent, row)
		})
	    })
	    .catch(e => {
		console.log('ERROR', e);
	    });	
    }
}

const populateSpreadsheet = (parent, data

const addRow = (parent, data) => {
    const tr = document.createElement('tr')
    data.forEach(text => {
	const td = document.createElement('td')
	if (isLink(text)) {
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

const isLink = text => {
    const urlExpression = '^(https?:\/\/)?([0-9a-zA-Z]+[\.]).*/'
    const regex = new RegExp(urlExpression);
    return regex.test(text)
}

customElements.define('brew-list-component', brewListComponent)
