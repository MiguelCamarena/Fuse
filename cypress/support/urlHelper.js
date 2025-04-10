export const getUrl = (routeKey = 'home', options = {}) => {
    const base = Cypress.config('baseUrl');
    const lang = Cypress.env('language');
    const routes = Cypress.env('routes');
    const path = routes[routeKey] || '/';
  
    const params = new URLSearchParams({ lang, ...options }).toString();
    return `${base}${path}?${params}`;
  };
  