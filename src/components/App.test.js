import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'

import App from './App'

const app = shallow(<App />)

it('renders correctly', () => {
	expect(app).toMatchSnapshot()
})

it('initializes the `state` with an empty array of gifts', () => {
	expect(app.state().gifts).toEqual([])
})

it('adds a new gift to `state` when clickcing the `add gift` button', () => {
	app.find('.btn-add').simulate('click')

	expect(app.state().gifts).toEqual([{ id: 1 }])
})
