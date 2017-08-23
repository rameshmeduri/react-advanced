import React, { Component } from 'react'
import TestComponent2 from './TestComponent2'
import smallPic from './assets/images/react_logo_small.jpg'


export default class TestComp extends Component {
	render() {
		return (
			<div>
				WHAT'S UP ???
				<img src={smallPic} />
				<TestComponent2 />
			</div>
		)
	}
}