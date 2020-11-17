import React from 'react'
import 'jest-enzyme'
import { shallow } from 'enzyme'

import Gift from './Gift'

describe('Gift', () => {
	const id = 1
	const mockRemove = jest.fn()
	const props = { gift: { id }, removeGift: mockRemove }
	const gift = shallow(<Gift {...props} />)

	it('renders properly', () => {
		expect(gift).toMatchSnapshot()
	})

	it('initializes a person and present in the ´state´', () => {
		expect(gift.state()).toEqual({ person: '', present: '' })
	})

	describe('When typing into the person input', () => {
		const person = 'uncle'
		beforeEach(() => {
			gift.find('.input-person').simulate('change', {
				target: { value: person },
			})
		})

		it('Updates the person into the state', () => {
			expect(gift.state().person).toEqual(person)
		})
	})

	describe('When typing into the present input', () => {
		const present = 'Golf Clubs'

		beforeEach(() => {
			gift
				.find('.input-present')
				.simulate('change', { target: { value: present } })
		})

		it('Updates the present in`state', () => {
			expect(gift.state().present).toEqual(present)
		})
	})

	describe('When clicking the `Remove Gift` button', () => {
		beforeEach(() => {
			gift.find('.btn-remove').simulate('click')
		})

		it('calls the removeGift callback', () => {
			expect(mockRemove).toHaveBeenCalledWith(id)
		})
	})
})
