const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return `${state.counter} Clicks`;
  }
};

const mutations = {
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
};

const actions = {
  increment: context => {
    context.commit("increment");
  },
  decrement: ({ commit }) => {
    commit("decrement");
  },
  maxIncrement: ({ commit }, payload) => {
    commit("increment", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
