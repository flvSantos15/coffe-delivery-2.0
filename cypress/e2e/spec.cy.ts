/* eslint-disable no-undef */
/// <reference types="cypress" />

// const coffe = [
//   {
//     image: '/assets/Expresso.png',
//     tag: 'Tradicional',
//     title: 'Expresso Tradicional',
//     description: 'O tradicional café feito com água quente e grãos moídos',
//     price: '3,40'
//   },
//   {
//     image: '/assets/Americano.png',
//     tag: 'Tradicional',
//     title: 'Expresso Americano',
//     description: 'Espresso diluído, menos intenso que o tradicional',
//     price: '2,50'
//   }
// ]

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  // it('Should be able to visit the local host', () => {
  //   cy.contains(
  //     'p',
  //     'Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora'
  //   ).wait(3000)
  // })

  // it('should not be able to start the countdown if the text and number input is empty', () => {
  //   cy.get(task).should('not.have.text')
  //   cy.get(minutesAmount).should('not.have.text')

  //   cy.contains('button', 'Começar').should('be.disabled').wait(3000)
  // })

  // it('should be able to type a text and time and start the countdown', () => {
  //   cy.get(task).type('Fazer café') // digo pra digitar
  //   cy.wait(1000)
  //   cy.get(minutesAmount).type('1')
  //   cy.wait(1000)

  //   cy.contains('button', 'Começar').should('not.be.disabled').click() // digo pra clicar no button
  //   cy.wait(2000)
  //   cy.contains('button', 'Interromper').click()
  //   cy.wait(2000)
  // })

  // it('Visit the history page', () => {
  //   cy.get('#history').click()
  //   cy.wait(1000)

  //   cy.contains('h1', 'Meu histórico')
  // })

  // it('Should go back to the home page', () => {
  //   cy.get('#timer').click()
  //   cy.wait(1000)

  //   cy.contains('button', 'Começar').should('be.disabled').wait(3000)
  // })
})
