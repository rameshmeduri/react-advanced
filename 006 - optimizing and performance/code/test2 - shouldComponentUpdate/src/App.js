import React, { Component } from 'react'
import faker from 'faker'
import ItemsList from './ItemsList'

export default class App extends Component {
    constructor() {
    	super()

	    this.state = {
    		inputVal: '',
		    items: []
	    }

	    for(let i = 0; i < 5000; i++) {
    		this.state.items.push({
			    value: faker.internet.userName(),
			    id: i
		    })
	    }
    }

    changeInput(e) {
    	this.setState({ inputVal: e.target.value })
    }

    submitForm(e) {
    	e.preventDefault()

	    const { inputVal, items } = this.state

	    this.setState({
		    items: [{ value: inputVal, id: Date.now() }, ...items],
		    inputVal: ''
	    })
    }

	render() {
    	const { inputVal, items } = this.state
    	
        return <div>
	        <form action="#" onSubmit={this.submitForm.bind(this)} >
	            <input type="text" value={inputVal} onChange={this.changeInput.bind(this)} />
	        </form>

	        <ItemsList items={items} />
        </div>
    }
}