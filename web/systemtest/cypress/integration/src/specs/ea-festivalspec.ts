// about.spec.ts
describe('About Page', () => {
  beforeEach(() => {
    const baseUrl = 'http://localhost:4200/festivals';
    cy.visit(baseUrl);
  });

  it("should show 'EaCodingTest' as title", () => {
    cy.title().should('eq', 'EaCodingTest');
  });

  cy.get('#items li').each(($li) => cy.log($li.text()))
  //Collect the items then print
  const items = []
  cy.get('#items li')
  .each(($li) => items.push($li.text()))
  .then(() => {
  cy.log(items.join(', '))
  })
  //Collect the items then assert the list
  const items = []
  cy.get('#items li').each(($li) => items.push($li.text()))
  // the items reference is set once

