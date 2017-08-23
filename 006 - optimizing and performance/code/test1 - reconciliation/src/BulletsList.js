import React, { Component } from 'react'
import Item from './Item'


export default class BulletsList extends Component {
	componentWillMount() {
		console.log('BulletsList: MOUNT')
	}
	componentWillUnmount() {
		console.log('BulletsList: UN_MOUNT')
	}
	render() {
		return <ul>
			{this.props.items.map(i => <Item key={i.id} value={i.value} />)}
		</ul>
	}
}