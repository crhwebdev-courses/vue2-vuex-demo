import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2;
    },
    stringCounter: state => {
      return `${state.counter} Clicks`;
    }
  },
  mutations: {
    increment: (state, payload) => {
      if (payload) {
        state.counter += payload;
      } else {
        state.counter++;
      }
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: context => {
      context.commit("increment");
    },
    decrement: ({ commit }) => {
      commit("decrement");
    },
    maxIncrement: ({ commit }, payload) => {
      commit("increment", payload);
    }
  }
});
