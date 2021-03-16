import axios from 'axios';

const state = {
  threads: [],
  target_thread: null
};

const getters = {
  relatedComments: state => state.threads,
  headThread: state => state.target_thread,
};

const actions = {
  async fetchComments({ commit }, id) {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/node/${id}`
    );

    commit('setComments', response.data);
  },

  async fetchHeadThread({
    commit
  }, id) {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/node/thread/${id}`
    );
    console.log("fetch thread response : ", response)
    commit('setTargetThread', response.data);
    console.log("fetch thread responsedata : ", response.data)
    console.log("state thread target thread : ", state.target_thread)
  },
};

const mutations = {
  setComments: (state, threads) => (state.threads = threads),
  setHeadThread: (state, threads) => {

    console.log("threads:", threads)

    state.target_thread = threads;
    console.log("target state", state.target_thread)
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
