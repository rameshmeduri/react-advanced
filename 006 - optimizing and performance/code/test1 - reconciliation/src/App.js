import React, { Component } from 'react'
import faker from 'faker'
import BulletsList from './BulletsList'
import NumericList from './NumericList'


export default class App extends Component {
    constructor() {
        super()

        this.state = {
            showFormat: 0,
            items: []
        }
    }

    changeShowFormat() {
        this.setState({
            showFormat: !this.state.showFormat
        })
    }

    addNewItem(position) {
        const { items } = this.state
        const newItem = {
            value: faker.internet.userName(),
            id: Date.now()
        }

        this.setState({
            items: position ? [...items, newItem] : [newItem, ...items]
        })
    }

    render() {
        return <div>
            <button onClick={this.changeShowFormat.bind(this)}>bullets/numeric</button>
            <button onClick={() => this.addNewItem.call(this, 0)}>add new at start</button>
            <button onClick={() => this.addNewItem.call(this, 1)}>add new at end</button>

            { this.state.showFormat ? <BulletsList items={this.state.items} /> : <NumericList items={this.state.items} /> }
        </div>
    }
}