<template>
  <div class="currency-card">
    <table>
      <tr>
        <td class="currency-info">
          <div class="currency-total">
            <span>{{currency.currency_code}}</span>
            <span>{{this.numberWithCommas(currency.currency_total)}}</span>
          </div>
          <div class="currency-name">
            {{currency.currency_code}} - {{currency.currency_full_name}}
          </div>
          <div class="currency-rate">
            1 USD = {{currency.currency_code}} {{this.numberWithCommas(currency.currency_rate)}}
          </div>
        </td>
        <td class="delete-currency">
          <span @click="$emit('remove', currency.id)" >
            (-)
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CurrencyList',
  props: {
    currency: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      usd: "10.0000"
    }
  },
  methods: {
    numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
  }
}
</script>

<style scoped>
  .currency-card {
    border: solid 1px;
    margin-top: 10px;
  }

  .currency-info .currency-name {
    text-align: left;
    font-size: 14px;
    font-style: italic;
    font-weight: bold;
  }

  .currency-info .currency-rate {
    text-align: left;
    font-size: 14px;
    font-style: italic;
  }

  .currency-info .currency-total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 20px;
  }

  .delete-currency {
    font-size: 24px;
  }

  table {
    width: 100%;
  }

  table .currency-info {
    width: 90%;
    text-align: left;
  }

  table .delete-currency {
    border-left: solid 1px;
    width: 10%;
  }
</style>
