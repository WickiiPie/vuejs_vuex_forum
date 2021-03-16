import axios from 'axios';

const state = {
  threads: [],

};

const getters = {
  relatedThreads: state => state.threads,

};

const actions = {
  async fetchThreads({ commit }, id) {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/forum/subforum/${id}`
    );

    commit('setThreads', response.data);
  },
};

const mutations = {
  setThreads: (state, threads) => (state.threads = threads),
};

export default {
  state,
  getters,
  actions,
  mutations
};
