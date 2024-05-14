import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'pznh86',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // let href: string = 'http://localhost:3333/'
      // on('task', {
      //   saveUrl(url) {
      //     href = url
      //     // cy.task() requires returning a Promise
      //     // or anything BUT undefined to signal that
      //     // the task is finished
      //     // see https://on.cypress.io/task
      //     return null
      //   },
      //   getUrl() {
      //     return href
      //   }
      // })
    },
    baseUrl: 'http://localhost:3000/'
  },
  component: {
    viewportHeight: 600,
    viewportWidth: 800,
    // specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    }
  }
})
