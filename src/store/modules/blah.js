const state = {
  blah: 0
};

const getters = {
  blah: state => {
    return state.blah;
  }
};

const mutations = {
  updateBlah: (state, payload) => {
    state.blah = payload;
  }
};

const actions = {
  updateBlah: ({ commit }, payload) => {
    commit("updateBlah", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
