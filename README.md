# foreign-exchange

## Description
- Created using Vue.js as a research and first time hands on
- Implement Axios to request (get) foreign exchange API
- note: Because this is my first time using Vue and it's been a long time not working on Javascript so the code may looks messy, still need to be fixed and refactored 💪💪😊😊

## Code Structure (if needed)
- App.vue for main app and config
- ForeignExchange.vue is the base controller and models (states) so we can see many methods like API calls (rates and full names currency), object generator/serializer and container for other component (CurrencyList, AddCurrency, MainCurrency)
- MainCurrency.vue is component for main/default currency -> hardcoded to USD with $10 amount
- CurrencyList.vue is component showing other chosen currency, showing info currency code, currency full name, currency rates based on USD, and final convertion amount from USD
- AddCurrency.vue is component for adding new currency to the list by selecting from the currency list

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
