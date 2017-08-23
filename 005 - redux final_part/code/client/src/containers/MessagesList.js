import React, { Component } from 'react'
import { connect } from 'react-redux'
import ChatHeader from 'components/ChatHeader'
import ChatControl from 'components/ChatControl'
import MessageItem from 'components/MessageItem'


class MessagesList extends Component {
	render() {
		return (
			<div class="chat">
				<ChatHeader/>

				<div class="chat-history">
					<ul>
						{this.props.messages.map(m => {
							return (
								<MessageItem key={m.time} {...m} />
							)
						})}
					</ul>

				</div>

				<ChatControl/>

			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		messages: state.messagesReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList)

