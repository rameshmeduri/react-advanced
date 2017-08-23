import React from 'react'
import { mount, shallow } from 'enzyme'
import Counter, { CounterApp } from './Counter'
import store from './store'
import { Provider } from 'react-redux'

describe('testing counter component', () => {
	test('test with Provider', () => {
		const component = mount(
			<Provider store={store}>
				<Counter/>
			</Provider>
		)

		component.find('#inc').simulate('click')
		component.find('#inc').simulate('click')
		component.find('#inc').simulate('click')

		expect(component.find('span').text()).toBe('3')
	})

	test('shallow testing', () => {
		const props = {
			counter: 22,
			inc: () => { console.log('im clicked') },
			dec: jest.fn()
		}
		const component = shallow(<CounterApp {...props} />)
		component.find('#inc').simulate('click')
		component.find('#dec').simulate('click', 'some_event_data')
		component.find('#dec').simulate('click', { x: 100, y: 899 })
		// console.log(props.dec.mock.calls)
		expect(component.find('span').text()).toBe(props.counter + "")
	})
})