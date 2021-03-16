import axios from 'axios';

const state = {
  subforums: []
};

const getters = {
  relatedSubforums: state => state.subforums
};

const actions = {
  async fetchSubforums({ commit }, id) {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/forum/${id}/subforum`
    );

    commit('setSubForums', response.data);
  }
};

const mutations = {
  setSubForums: (state, subforums) => (state.subforums = subforums),
};

export default {
  state,
  getters,
  actions,
  mutations
};
