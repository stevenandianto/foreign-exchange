<template>
  <div>
    <MainCurrency
      @convert="convertCurrency"
    />
    <div v-if="active_currencies.length">
      <CurrencyList 
        v-for="currency in active_currencies"
        :key="currency.id"
        :currency="currency"
        @remove="removeCurrency"
      />
    </div>
    <p v-else>Empty Currency List</p>
    <AddMoreCurrency
      :inactive_currencies="inactive_currencies"
      @add="addCurrency"
    />
  </div>
</template>

<script>
import axios from 'axios';
import MainCurrency from './MainCurrency.vue'
import CurrencyList from './CurrencyList.vue'
import AddMoreCurrency from './AddMoreCurrency.vue'

export default {
  name: 'ForeignExchange',
  components: {
    MainCurrency, CurrencyList, AddMoreCurrency
  },
  data () {
    return {
      active_currencies: [],
      inactive_currencies: [],
      currency_api_response: null,
      currencies: [],
      currency_api_names_response: null
    }
  },
  mounted () {
    this.getApiData();
  },
  methods: {
    getApiData() {
      axios
      .get('https://api.exchangeratesapi.io/latest?base=USD')
      .then(response => (this.currency_api_response = response))
      .catch(error => console.log(error))
      .finally(() => this.currencyGenerator())
    },
    getApiRateNamesData() {
      axios
      .get('https://openexchangerates.org/api/currencies.json')
      .then(response => (this.currency_api_names_response = response))
      .catch(error => console.log(error))
      .finally(() => this.setName())
    },
    currencyGenerator() {
      var rates = this.currency_api_response.data.rates
      if (this.currency_api_response != null && Object.keys(rates).length > 0) {
        for ( var key in rates){
          let new_currency = {
                              id: key, 
                              currency_code: key, 
                              currency_full_name: key, 
                              currency_total: 10 * parseFloat(rates[key]), 
                              currency_rate: rates[key], 
                              active: false
                              }
          this.currencies.push(new_currency);
        }
      }
      this.getApiRateNamesData();
      this.refreshCurrency()
    },
    setName() {
      var names = this.currency_api_names_response.data
      if (this.currency_api_names_response != null && Object.keys(names).length > 0) {
        this.currencies.forEach(element => {
          element.currency_full_name = names[element.id]
        });
      }
    },
    refreshCurrency () {
      this.active_currencies = this.currencies.filter(currency => {
        return currency.active
      })

      this.inactive_currencies = this.currencies.filter(currency => {
        return !currency.active
      })
    },
    addCurrency (id) {
      if (!!id) {
        let currency_added_index = this.currencies.findIndex(currency => { 
          return currency.id === id 
        });
        this.currencies[currency_added_index].active = true
        this.refreshCurrency();
        
        this.saveCurrency();
      }
    },
    removeCurrency (id) {
      let currency_removed_index = this.currencies.findIndex(currency => { 
        return currency.id === id 
      })

      this.currencies[currency_removed_index].active = false
      this.refreshCurrency();

      this.saveCurrency();
    },
    saveCurrency () {
      const parsed = JSON.stringify(this.currencies);
      localStorage.setItem('currencies', parsed);
    },
    convertCurrency (value) {
      this.currencies.forEach(element => {
        element.currency_total = parseFloat(value) * element.currency_rate
      });
    }
  }
}
</script>