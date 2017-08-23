import React, { Component } from 'react'
import { Provider } from 'react-redux'
import PeopleList from 'containers/PeopleList'
import MessagesList from 'containers/MessagesList'
import store from 'store'
window.store = store


export default class Chat extends Component {
	render() {
		return (
			<Provider key={ module.hot ? Date.now() : store} store={store}>
				<div class="container clearfix">
					<PeopleList />
					<MessagesList />
				</div>
			</Provider>
		)
	}
}