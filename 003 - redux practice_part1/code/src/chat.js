import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './assets/styles/style.scss'
import Messages from './messages'
import Users from './users'
import { addNewUser, newMessage } from './actions'


class Chat extends Component {
	render() {
		return (
			<main className="main-wrapper">
				<Messages newMessage={this.props.newMessage} messages={this.props.messages} />
				<Users users={this.props.users} addNewUser={this.props.addNewUser} />
			</main>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersReducer,
		messages: state.messagesReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addNewUser: bindActionCreators(addNewUser, dispatch),
		newMessage: bindActionCreators(newMessage, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)