import { shallowMount } from "@vue/test-utils";
import Vue from 'vue'
import ForeignExchange from "@/components/ForeignExchange.vue";
import axios from 'axios';

describe("ForeignExchange", () => {
  it("show Empty list and add dropdown if without data", () => {
    const wrapper = shallowMount(ForeignExchange, {
      propsData: { 
        active_currencies: [],
        inactive_currencies: [],
        currency_api_response: null,
        currencies: [],
        currency_api_names_response: []
      }
    });
    expect(wrapper.text()).toMatch("Empty Currency List");
  });

  it("has empty default data / initial state", () => {
    expect(typeof ForeignExchange.data).toBe('function')
    const defaultData = ForeignExchange.data()
    expect(defaultData.active_currencies).toEqual([])
    expect(defaultData.inactive_currencies).toEqual([])
    expect(defaultData.currencies).toEqual([])
    expect(defaultData.currency_api_response).toEqual(null)
    expect(defaultData.currency_api_names_response).toEqual(null)
  });
});
