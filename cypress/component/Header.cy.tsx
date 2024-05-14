import React from 'react'
import { Header } from '../../src/components/moleculas/Header'

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<Header />)
  })
})
