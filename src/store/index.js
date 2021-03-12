import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import authHeader from '@/services/auth-header.js'
Vue.use(Vuex)
////////////////////
const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
  ? { status: { loggedIn: true }, user, posts:null,  my_username:''}
  : { status: { loggedIn: false }, user: null ,posts:null, my_username:''};
////////////////////

export default new Vuex.Store({
  // state: {
  //   posts: null,
  // // my_user: user,
  //   my_user: {
  //     initialState
  //   }
  //     ,
  //   my_username: ''
  // },
  state: initialState,
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    // login successful
    setUser(state, username) {
      state.user = username;
      // console.log("Test1:", state)
      console.log("Test2:", state.status.loggedIn)
      // console.log("Test3:", state.my_user.loggedIn)
      // console.log("Test4:", state.my_user.user)
      console.log("Test:", state.user)
      // state.my_user.loggedIn = true;
      // state.my_user.initialState.user = user;
    },
  },
  getters: {
    StatePosts: (state) => state.posts,
    StateUser: (state) => state.my_username,
    // StateUser: (state) => state.my_user.status,
  },
  actions: {
    async GetPosts(state, posts ) {
      // let response = await axios.get("posts/");
      let response = await axios.get("posts/", { headers: authHeader() });
      console.log("Response : ", response);
      state.posts = posts;

      console.log("user:", user.access)
      // commit("setPosts", response.data);
    },
    async LogIn({commit}, my_user) {
      await axios.post("login/", my_user)
      .then(response => {
        console.log("DEBUG", response)
        if (response.data.access) {
          console.log("set")
          // save to local storage keyword 'user'
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        console.log("DEBUG", response.data.access)
        console.log("DEBUG", response.data)
        return response.data;
      });
      await commit("setUser", my_user.get("username"));

    },
    async logout() {
      localStorage.removeItem('user');
    }
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
