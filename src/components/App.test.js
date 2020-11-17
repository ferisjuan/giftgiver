import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'

import App from './App'

describe('App', () => {
	const app = shallow(<App />)

	it('renders correctly', () => {
		expect(app).toMatchSnapshot()
	})

	it('initializes the `state` with an empty array of gifts', () => {
		expect(app.state().gifts).toEqual([])
	})

	describe('When clicking the `add-gift` button', () => {
		beforeEach(() => {
			app.find('.btn-add').simulate('click')
		})

		afterEach(() => {
			app.setState({ gifts: [] })
		})

		it('adds a new gift to `state`', () => {
			expect(app.state().gifts).toEqual([{ id: 1 }])
		})

		it('adds a new gift to the rendered list', () => {
			expect(app.find('.gift-list').children().length).toEqual(1)
		})

		it('creates a Gift Component', () => {
			expect(app.find('Gift').exists()).toBe(true)
		})
	})
})
