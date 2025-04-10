import { hotelDetailLocators as loc } from '../support/locators';
import { getUrl } from '../support/urlHelper';

describe('Hotel Details - Modular Locators & URL', () => {
  beforeEach(() => {
    cy.visit(getUrl('searchResults', { ss: Cypress.env('searchCity') }));
  });

  it('Checks hotel detail page content and UI elements', () => {
    cy.get('[data-testid="property-card"]').first().click();

    cy.origin('https://www.booking.com', () => {
      cy.get(loc.hotelTitle).should('exist');
      cy.get(loc.reviewScore).should('be.visible');
      cy.get(loc.imageGallery).should('have.length.greaterThan', 1);
      cy.contains('Amenities').should('exist');
      cy.contains(/Wi[-]?Fi|Internet/i).should('exist');
      cy.get(loc.mapElement).should('exist');
    });
  });
});
