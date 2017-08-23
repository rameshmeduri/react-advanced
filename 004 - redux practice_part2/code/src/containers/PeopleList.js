import React, { Component } from 'react'
import { connect } from 'react-redux'


class PeopleList extends Component {
	render() {
		return (
			<div class="people-list" id="people-list">
				<div class="search">
					<input type="text" placeholder="search" />
					<i class="fa fa-search"></i>
				</div>
				<ul class="list">
					{this.props.people.map(user => {
						return (
							<li key={user} class="clearfix">
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg" alt="avatar" />
								<div class="about">
									<div class="name">{user}</div>
									<div class="status">
										<i class="fa fa-circle online"></i> online
									</div>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		people: state.peopleReducer
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		dispatch
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(PeopleList)

