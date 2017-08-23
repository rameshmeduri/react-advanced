import React, { Component } from 'react'
import Item from './Item'


export default class NumericList extends Component {
	componentWillMount() {
		console.log('NumericList: MOUNT')
	}
	componentWillUnmount() {
		console.log('NumericList: UN_MOUNT')
	}
    render() {
        return <ol>
	        {this.props.items.map(i => <Item key={i.id} value={i.value} />)}
        </ol>
    }
}