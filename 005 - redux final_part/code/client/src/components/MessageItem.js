import React, { Component } from 'react'

export default class MessageItem extends Component {
	render() {
		console.log(this.props)
		return (
			<li class="clearfix">
				<div class="message-data align-right">
					<span class="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
					<span class="message-data-name">Olia</span> <i class="fa fa-circle me"></i>

				</div>
				<div class="message other-message float-right">
					Hi Vincent, how are you? How is the project coming along?
				</div>
			</li>
		)
	}
}