import { shallowMount } from "@vue/test-utils";
import CurrencyList from "@/components/CurrencyList.vue";

describe("CurrencyList", () => {
  it("show active list data", () => {
    const wrapper = shallowMount(CurrencyList, {
      propsData: { 
        currency: {
          id: "IDR", 
          currency_code: "IDR", 
          currency_full_name: "Indonesian Rupiah", 
          currency_total: 100000, 
          currency_rate: 10000, 
          active: true
        }
      }
    });
    expect(wrapper.find(".currency-name").text()).toMatch("IDR - Indonesian Rupiah");
    expect(wrapper.find(".currency-rate").text()).toMatch("10,000");
    expect(wrapper.find(".currency-total").text()).toMatch("100,000");
  });
});
