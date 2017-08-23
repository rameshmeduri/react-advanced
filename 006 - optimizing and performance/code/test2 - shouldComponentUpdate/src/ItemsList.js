import React, { Component } from 'react'

export default class ItemsList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
    	return this.props.items.length !== nextProps.items.length
    }
	render() {
		console.log('list re-rendered')
        return <ul>
	        {this.props.items.map(i => <li key={i.id}>{i.value}</li>)}
        </ul>
    }
}