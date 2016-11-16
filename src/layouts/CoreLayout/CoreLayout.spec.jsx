/* eslint-disable no-unused-expressions */

import React from 'react'
import { shallow } from 'enzyme'
import CoreLayout from './CoreLayout'

describe('(Layout) Core', () => {
  let props
  let wrapper

  beforeEach(() => {
    props = {
      children: <h1 className="child">Child</h1>,
    }
    wrapper = shallow(<CoreLayout {...props} />)
  })

  it('Should render as a <div>.', () => {
    expect(wrapper.is('div')).to.equal(true)
  })
})
