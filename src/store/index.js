import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null,
    my_user: null,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setUser(state, username) {
      state.user = username;
    },
  },
  getters: {
    StatePosts: (state) => state.posts,
  },
  actions: {
    async GetPosts(state, posts ) {
      let response = await axios.get("posts/");
      console.log("Response : ", response);
      state.posts = posts;
      // commit("setPosts", response.data);
    },
    async LogIn({commit}, my_user) {
      await axios.post("login", my_user);
      await commit("setUser", my_user.get("username"));
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
