import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
// import authHeader from "@/services/auth-header.js";
import forums from './modules/forums';
import subforums from './modules/subforums';
import threads from './modules/threads';
import posts from './modules/posts';
import comments from './modules/comments';
Vue.use(Vuex);
////////////////////
const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? {
      status: {
        loggedIn: true,
      },
      user,
      // posts: null,
      my_username: "",
    }
  : {
      status: {
        loggedIn: false,
      },
      user: null,
      // posts: null,
      my_username: "",
    };
////////////////////

export default new Vuex.Store({
  state: initialState,
  mutations: {
    setUser(state, username) {
      console.log("Test state user:", state.user);
      console.log("Test status loggedIn:", state.status.loggedIn);
      state.user = username;
      state.status.loggedIn = true;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user = null;
    },
  },
  getters: {
    StateUser: (state) => state.user,
    isAuthenticated: (state) => state.status.loggedIn,
  },
  actions: {
    async LogIn({ commit }, my_user) {
      await axios.post("login/", my_user).then((response) => {
        console.log("DEBUG", response);
        if (response.data.access) {
          console.log("set");
          // save to local storage keyword 'user'
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        console.log("DEBUG", response.data.access);
        console.log("DEBUG", response.data);
        return response.data;
      });
      await commit("setUser", my_user.get("username"));
    },
    async logout({ commit }) {
      localStorage.removeItem("user");
      await commit("logout");
    },
    async Register({ commit }, user) {
      return axios
        .post("register/", {
          username: user.username,
          email: user.email,
          password: user.password,
          first_name: user.first_name,
          last_name: user.last_name,
          password2: user.password2,
        })
        .then(
          (response) => {
            commit("registerSuccess");
            console.log("Register success:", response.data)
            return Promise.resolve(response.data);
          },
          (error) => {
            commit("registerFailure");
            console.log("Register error:", error.data)
            return Promise.reject(error);
          }
        );
    },
  },
  modules: {
    forums,
    subforums,
    threads,
    posts,
    comments,
  },
  plugins: [createPersistedState()],
});
