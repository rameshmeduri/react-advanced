import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { asyncDec, asyncInc, decrement, increment } from './actions'


export class CounterApp extends Component {
    render() {
        return <div>
	        <button id="async_dec" onClick={this.props.asyncDec}>async -</button>
	        { ' ' }
			<button id="dec" onClick={this.props.dec}>-</button>
	        <span style={{ padding: 10, fontWeight: 'bold', fontSize: 22 }}>
		        {this.props.counter}
	        </span>
	        <button id="inc" onClick={this.props.inc}>+</button>
	        { ' ' }
	        <button id="async_inc" onClick={this.props.asyncInc}>async +</button>
        </div>
    }
}

export default connect(
	state => ({counter: state}),
	dispatch => ({
		inc: bindActionCreators(increment, dispatch),
		asyncInc: bindActionCreators(asyncInc, dispatch),
		dec: bindActionCreators(decrement, dispatch),
		asyncDec: bindActionCreators(asyncDec, dispatch)
	})
)(CounterApp)