import React, { Component } from 'react'


export default class UsersList extends Component {
	render() {
		return (
			<div className="users">
				<h3 className="users__title">Online users:</h3>
				
				<ul>
					{this.props.users.map(u => {
						return <li key={u}>{u}</li>
					})}
				</ul>

				<button onClick={this.props.addNewUser}>
					add new user
				</button>
			</div>
		)
	}
}