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



  // async addTodo({ commit }, title) {
  //   const response = await axios.post(
  //     'https://jsonplaceholder.typicode.com/threads',
  //     { title, completed: false }
  //   );

  //   commit('newTodo', response.data);
  // },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/threads/${id}`);

  //   commit('removeTodo', id);
  // },
  // async filterTodos({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/threads?_limit=${limit}`
  //   );

  //   commit('setThreads', response.data);
  // },
  // async updateTodo({ commit }, updTodo) {
  //   const response = await axios.put(
  //     `https://jsonplaceholder.typicode.com/threads/${updTodo.id}`,
  //     updTodo
  //   );

  //   console.log(response.data);

  //   commit('updateTodo', response.data);
  // }
};

const mutations = {
  setThreads: (state, threads) => (state.threads = threads),

  // newTodo: (state, todo) => state.threads.unshift(todo),
  // removeTodo: (state, id) =>
  //   (state.threads = state.threads.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.threads.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.threads.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
