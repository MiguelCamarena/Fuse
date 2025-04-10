# Fuse QA Automation Challenge – Cypress Framework

This project is part of a QA Automation Take-Home Challenge for Booking.com using **Cypress**. It includes:
- AI-powered test case design
- Dynamic data handling (e.g., check-in dates)
- Modular architecture for locators and configs
- Automated HTML reporting with Mochawesome
- CI/CD pipeline support via Jenkins

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/MiguelCamarena/Fuse.git
cd Fuse
```

2. Install the dependencies:

```bash
npm install
```

3. Launch the Cypress Test Runner (GUI mode):

```bash
npx cypress open
```

4. Or run tests in headless mode:

```bash
npx cypress run
```

---

## 🧪 Test Structure

```bash
cypress/
├── e2e/                      # Test specs by user story
│   ├── flight-booking.cy.js
│   ├── hotel-details.cy.js
│   └── hotel-search.cy.js
├── fixtures/                 # Test data (JSON)
│   └── searchData.json
├── support/                  # Helpers, commands & locators
│   ├── commands.js
│   ├── locators.js
│   ├── urlHelper.js
│   └── e2e.js
├── screenshots/              # Saved screenshots on failure
├── downloads/                # Downloaded files (optional)
mochawesome-report/           # Generated HTML reports
Jenkinsfile                   # CI pipeline configuration
```

---

## ⚙️ Config Setup

Your base settings are located in `cypress.config.js`. Example:

```js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.booking.com',
    env: {
      language: 'en-us',
      searchCity: 'New York',
      routes: {
        home: '/',
        searchResults: '/searchresults.html',
        flights: '/flights'
      }
    }
  }
});
```

---

## 📂 Modular Locators & URL Helper

### 🔍 Locators

Defined in `cypress/support/locators.js` for reusability and maintainability.

```js
export const homePageLocators = {
  searchInput: 'input[name="ss"]',
  submitButton: 'button[type="submit"]',
  propertyCard: '[data-testid="property-card"]',
};
```

### 🌐 URL Helper

Builds clean URLs using the config and params.

```js
export const getUrl = (routeKey = 'home', options = {}) => {
  const base = Cypress.config('baseUrl');
  const lang = Cypress.env('language');
  const routes = Cypress.env('routes') || {};
  const path = routes[routeKey] || '/';
  const params = new URLSearchParams({ lang, ...options }).toString();
  return `${base}${path}?${params}`;
};
```

---

## 📊 Generate Mochawesome Report

### 1. Run tests with report output:

```bash
npx cypress run --reporter mochawesome --reporter-options "reportDir=mochawesome-report,overwrite=false,html=false,json=true"
```

### 2. Merge JSON results:

```bash
npx mochawesome-merge mochawesome-report/*.json > mochawesome.json
```

### 3. Generate final HTML report:

```bash
npx mochawesome-report-generator mochawesome.json
```

You’ll find the HTML report in:  
`mochawesome-report/mochawesome.html`

---

## 🔁 Continuous Integration with Jenkins

This project includes a `Jenkinsfile` for automated CI builds and test execution.

### Sample pipeline steps:
- Install dependencies via `npm`
- Run Cypress test suite with Mochawesome
- Merge and generate HTML reports
- Archive the report as a Jenkins artifact

To run it:
1. Set up a Jenkins job (e.g., multibranch pipeline)
2. Ensure you have NodeJS and Chrome available on the agent
3. Jenkins will detect and run the `Jenkinsfile` on each commit

---

## ✅ AI Integration Highlights

- 🤖 **Test Case Generation**: Created and refined via ChatGPT (edge cases, dynamic inputs, locator strategy)
- 🧠 **Self-Healing Locators**: Resilient selectors using `data-testid`, semantic roles, or visible text
- 📈 **AI-assisted Reporting**: Review and improvements based on log analysis and test insights

---

## 📄 License

This project is licensed under the MIT License.
