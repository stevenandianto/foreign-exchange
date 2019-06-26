<template>
  <div class="currency">
    <div class="currency-title">
      <span>USD - United States Dollars</span>
    </div>
    <div class="input-container">
      <label>USD</label>
      <input 
        type="number"
        id="main-curr"
        name="main-curr"
        v-model="usd"
        @change="$emit('convert', usd)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainCurrency',
  data() {
    return {
      usd: "10.0000"
    }
  }
}
</script>

<style scoped>
  .currency {
    border-bottom: solid 1px;
    padding-bottom: 15px;
  }

  .currency .currency-title {
    text-align: left;
    font-size: 14px;
    font-style: italic;
  }

  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }

  #main-curr {
    min-width: 300px;
    border: none;
    font-size: 20px;
    font-weight: bold;
    text-align: right;
  }

  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
</style>
