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
  // async addTodo({ commit }, title) {
  //   const response = await axios.post(
  //     'https://jsonplaceholder.typicode.com/forums',
  //     { title, completed: false }
  //   );

  //   commit('newTodo', response.data);
  // },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/forums/${id}`);

  //   commit('removeTodo', id);
  // },
  // async filterTodos({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/forums?_limit=${limit}`
  //   );

  //   commit('setForums', response.data);
  // },
  // async updateTodo({ commit }, updTodo) {
  //   const response = await axios.put(
  //     `https://jsonplaceholder.typicode.com/forums/${updTodo.id}`,
  //     updTodo
  //   );

  //   console.log(response.data);

  //   commit('updateTodo', response.data);
  // }
};

const mutations = {
  setForums: (state, forums) => (state.forums = forums),
  // newTodo: (state, todo) => state.forums.unshift(todo),
  // removeTodo: (state, id) =>
  //   (state.forums = state.forums.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.forums.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.forums.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
