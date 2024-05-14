/* eslint-disable no-undef */
/// <reference types="cypress" />

const coffe = [
  {
    image: '/assets/Expresso.png',
    tag: 'Tradicional',
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '3,40'
  },
  {
    image: '/assets/Americano.png',
    tag: 'Tradicional',
    title: 'Expresso Americano',
    description: 'Espresso diluído, menos intenso que o tradicional',
    price: '2,50'
  }
]

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('Should be able to visit the local host', () => {
  //   cy.mount(<Stepper />)
  //   cy.get('span').should('have.text', '0')
  // })
})
