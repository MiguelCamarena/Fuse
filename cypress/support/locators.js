export const homePageLocators = {
    searchInput: 'input[name="ss"]',
    submitButton: 'button[type="submit"]',
    propertyCard: '[data-testid="property-card"]',
    reviewScoreFilter: 'div[data-filters-group="review_score"]',
    rating8Plus: 'div[data-filters-group="review_score"] label:contains("8+")',
    sortByButton: 'button[data-testid="sorters-dropdown-trigger"]',
    sortByLowest: 'button:contains("Price (lowest first)")',
  };
  
  export const hotelDetailLocators = {
    hotelTitle: 'h2',
    reviewScore: '[data-testid="review-score-component"]',
    imageGallery: 'img',
    amenitiesSection: 'div:contains("Amenities")',
    wifiAmenity: 'div:contains("Wi-Fi")',
    mapElement: '#hotel_sidebar_static_map',
  };
  
  export const flightPageLocators = {
    roundTripRadio: '[data-testid="round-trip-radio-button"]',
    returnDateInput: '[data-testid="return-date-input"]',
    departureDateInput: '[data-testid="departure-date-input"]',
  };
  