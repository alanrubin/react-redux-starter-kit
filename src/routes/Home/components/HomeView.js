import React from 'react'
import DuckImage from '../assets/Duck.jpg'

import styled from 'styled-components'

const Img = styled.img`
  display: block;
  width: 120px;
  margin: 1.5rem auto;
`

const Title = styled.h4`
  color: red;

  &:hover {
    color: blue;
  }
`

export const HomeView = () => (
  <div>
    <Title>Welcome!</Title>
    <Img
      alt='This is a duck, because Redux!'
      className='duck'
      src={DuckImage} />
  </div>
)

export default HomeView
