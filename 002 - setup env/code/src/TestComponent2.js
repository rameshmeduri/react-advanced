import React, { Component } from 'react'
import './assets/styles/style.scss'
import bigPic from './assets/images/redux_logo_big.png'


export default class TestComp2 extends Component {
	constructor() {
		super()

		this.state = {
			counter: 0
		}
	}
	render() {
		console.log(bigPic)
		return <div onClick={() => this.setState({ counter: ~~(Math.random() * 10)  } )}>
			{ this.state.counter }
			<img style={{ maxWidth: 200 }} src={bigPic} alt=""/>
		</div>
	}
}