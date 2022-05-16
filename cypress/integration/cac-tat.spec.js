describe('CAC TAT', function() {
  before(() => cy.vrtStart())
  beforeEach(() => cy.visit('./src/index.html'))
  after(() => cy.vrtStop())

  it('success message', function() {
    const { test } = this
    const { title } = test
    cy.get('.success').invoke('show')
    cy.vrtTrack(title, { diffTollerancePercent: 0.005 })
  })

  it('error message', function() {
    const { test } = this
    const { title } = test
    cy.get('.error').invoke('show')
    cy.vrtTrack(title, { diffTollerancePercent: 0.005 })
  })

  it('phone becomes mandatory', function() {
    const { test } = this
    const { title } = test
    cy.get('#phone-checkbox').check()
    cy.vrtTrack(title, { diffTollerancePercent: 0.005 })
  })

  it('selects a file for upload', function() {
    const { test } = this
    const { title } = test
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    cy.vrtTrack(title, { diffTollerancePercent: 0.005 })
  })

  it('selects YouTube', function() {
    const { test } = this
    const { title } = test
    cy.get('#product').select('YouTube')
    cy.vrtTrack(title, { diffTollerancePercent: 0.005 })
  })

  it('finds the cat', function() {
    const { test } = this
    const { title } = test
    cy.get('#cat').invoke('show')
    cy.vrtTrack(title, { diffTollerancePercent: 0.005 })
  })
})
