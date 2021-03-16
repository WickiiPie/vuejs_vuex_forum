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
  // },
  // async addTodo({ commit }, title) {
  //   const response = await axios.post(
  //     'https://jsonplaceholder.typicode.com/subforums',
  //     { title, completed: false }
  //   );

  //   commit('newTodo', response.data);
  // },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/subforums/${id}`);

  //   commit('removeTodo', id);
  // },
  // async filterTodos({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/subforums?_limit=${limit}`
  //   );

  //   commit('setSubForums', response.data);
  // },
  // async updateTodo({ commit }, updTodo) {
  //   const response = await axios.put(
  //     `https://jsonplaceholder.typicode.com/subforums/${updTodo.id}`,
  //     updTodo
  //   );

  //   console.log(response.data);

  //   commit('updateTodo', response.data);
  }
};

const mutations = {
  setSubForums: (state, subforums) => (state.subforums = subforums),
  // newTodo: (state, todo) => state.subforums.unshift(todo),
  // removeTodo: (state, id) =>
  //   (state.subforums = state.subforums.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.subforums.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.subforums.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
