import dayjs from 'dayjs';
import { homePageLocators as loc } from '../support/locators';
import { getUrl } from '../support/urlHelper';

describe('Hotel Search - Config-driven & Modular', () => {
  const checkIn = dayjs().add(5, 'day').format('YYYY-MM-DD');
  const checkOut = dayjs().add(8, 'day').format('YYYY-MM-DD');

  before(() => {
    cy.visit(getUrl('home'));
  });

  it('Performs a hotel search using config values', () => {
    cy.get(loc.searchInput).type(`${Cypress.env('searchCity')}{enter}`);
    cy.get(`[data-date="${checkIn}"]`).click();
    cy.get(`[data-date="${checkOut}"]`).click();
    cy.get(loc.submitButton).click();

    cy.url().should('include', Cypress.env('searchCity').replace(' ', '+'));
    cy.get(loc.propertyCard).should('exist');
  });

  it('Applies Guest Rating filter 8+', () => {
    cy.contains('Review score').scrollIntoView();
    cy.contains('8+').click({ force: true });
    cy.get(loc.propertyCard).should('have.length.at.least', 1);
  });

  it('Sorts by Lowest Price', () => {
    cy.contains('Sort by').click();
    cy.contains('Price (lowest first)').click();
    cy.get(loc.propertyCard).should('exist');
  });
});
