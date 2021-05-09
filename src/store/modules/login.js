import axios from "axios";

const login = {
  state: {
    token: null,

    username: null,
  },

  getters: {
    isUserLoggedIn: (state) => state.token !== null,

    getUsername: (state) => state.username,
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    setUsername(state, username) {
      state.username = username;
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      try {
        const { data } = await axios.post("api.url/login", {
          email: email,
          password: password,
        });

        commit("setToken", data.token);
        commit("setUsername", data.username);
      } catch (error) {
        return error.response;
      }
    },
  },
};

export default login;
