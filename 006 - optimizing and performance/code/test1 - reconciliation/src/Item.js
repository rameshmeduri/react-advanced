import React, { Component } from 'react'

export default class Item extends Component {
	componentWillMount() {
		console.log('Item: MOUNT')
	}
	componentWillUnmount() {
		console.log('Item: UN_MOUNT')
	}
    render() {
        return <li>
            {this.props.value}
        </li>
    }
}