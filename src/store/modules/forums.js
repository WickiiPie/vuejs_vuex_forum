import axios from 'axios';

const state = {
  forums: []
};

const getters = {
  allForums: state => state.forums
};

const actions = {
  async fetchForums({ commit }) {
    const response = await axios.get(
      'http://127.0.0.1:8080/api/forum'
    );
    commit('setForums', response.data);
  },
};

const mutations = {
  setForums: (state, forums) => (state.forums = forums),
};

export default {
  state,
  getters,
  actions,
  mutations
};
