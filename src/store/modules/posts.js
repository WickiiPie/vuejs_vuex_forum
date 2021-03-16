import axios from 'axios';

const state = {
  posts: [],
  parent_thread_id: null,
  target_thread: null
};

const getters = {
  relatedPosts: state => state.posts,
  relatedParentId: state => state.parent_thread_id,
  targetThread: state => state.target_thread,
};

const actions = {
  async fetchPosts({ commit }, id) {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/node/${id}`
    );

    commit('setPosts', response.data);
  },
  // setParentThread({commit}, id) {
  //   commit('setParentThread', id);
  // },
  async fetchThreadDetail({ commit }, id) {
    const response = await axios.get(
      `http://127.0.0.1:8080/api/node/thread/${id}`
    );
    console.log("fetch thread response : ", response)
    commit('setTargetThread', response.data);
    console.log("fetch thread responsedata : ", response.data)
    console.log("state thread target thread : ", state.target_thread)
  },
  // async set
  // async addTodo({ commit }, title) {
  //   const response = await axios.post(
  //     'https://jsonplaceholder.typicode.com/posts',
  //     { title, completed: false }
  //   );

  //   commit('newTodo', response.data);
  // },
  // async deleteTodo({ commit }, id) {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

  //   commit('removeTodo', id);
  // },
  // async filterTodos({ commit }, e) {
  //   // Get selected number
  //   const limit = parseInt(
  //     e.target.options[e.target.options.selectedIndex].innerText
  //   );

  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  //   );

  //   commit('setPosts', response.data);
  // },
  // async updateTodo({ commit }, updTodo) {
  //   const response = await axios.put(
  //     `https://jsonplaceholder.typicode.com/posts/${updTodo.id}`,
  //     updTodo
  //   );

  //   console.log(response.data);

  //   commit('updateTodo', response.data);
  // }
};

const mutations = {
  setPosts: (state, posts) => (state.posts = posts),
  // setParentThread: (state, thread) => (state.parent_thread_id = thread),
  setTargetThread: (state, threads) => {

    console.log("threads:", threads)

    state.target_thread = threads;
    console.log("target state" ,state.target_thread)
  }
  // newTodo: (state, todo) => state.posts.unshift(todo),
  // removeTodo: (state, id) =>
  //   (state.posts = state.posts.filter(todo => todo.id !== id)),
  // updateTodo: (state, updTodo) => {
  //   const index = state.posts.findIndex(todo => todo.id === updTodo.id);
  //   if (index !== -1) {
  //     state.posts.splice(index, 1, updTodo);
  //   }
  // }
};

export default {
  state,
  getters,
  actions,
  mutations
};
