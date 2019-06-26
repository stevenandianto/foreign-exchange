<template>
  <div>
    <select id="currency_list" name="CurrencyList" @change="$emit('add', selected)" v-model="selected" :required="true">
      <option value="undefined" disabled>(+) Add More Currencies</option>
      <option v-for="currency in inactive_currencies"
        :key="currency.id"
        :value="currency.currency_code">
        {{currency.currency_code}} - {{currency.currency_full_name}}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AddMoreCurrency',
  props: {
    inactive_currencies: {
      type: Array, 
      required: true
    }
  },
  data() {
    return {
      selected: "undefined"
    }
  }
}
</script>

<style scoped>
  select#currency_list {
    width: 100%;
    -webkit-appearance: button;
    -webkit-padding-end: 20px;
    -webkit-padding-start: 2px;
    -webkit-user-select: none;
    background-image: url(http://i62.tinypic.com/15xvbd5.png), -webkit-linear-gradient(#FAFAFA, #F4F4F4 40%, #E5E5E5);
    background-position: 97% center;
    background-repeat: no-repeat;
    border: 1px solid #AAA;
    color: #555;
    font-size: inherit;
    margin-top: 20px;
    overflow: hidden;
    padding: 5px 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
