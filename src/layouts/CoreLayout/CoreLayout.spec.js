import React from 'react'
import { shallow } from 'enzyme'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'

describe('(Layout) Core', function () {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {
      children : <h1 className='child'>Child</h1>
    }
    _wrapper = shallow(<CoreLayout {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })
})
