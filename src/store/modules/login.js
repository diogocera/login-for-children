// import axios from "axios";

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
    login({ commit }, { email }) {
      return new Promise((resolve, reject) => {
        // const data = await axios.post("api.url/login", {
        //   email: email,
        //   password: password,
        // });

        mockLoginRequest(email)
          .then((data) => {
            commit("setToken", data.token);
            commit("setUsername", data.username);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default login;

function mockLoginRequest(email) {
  return new Promise((resolve, reject) => {
    let success = Math.random() < 0.5;
    setTimeout(() => {
      if (success) {
        let token = Math.random().toString(36).substr(2);
        let username = email.substr(0, email.indexOf("@"));
        resolve({ token, username });
      } else {
        reject({ message: "Error" });
      }
    }, 1000);
  });
}
