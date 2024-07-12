/* eslint-disable no-shadow */
import authService from '../../services/authService';

const state = () => ({
  user: null,
});

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  logout(state) {
    state.user = null;
  },
};

const actions = {
  authenticate({ commit }, { username, password }) {
    return authService
      .login({ username, password })
      .then((res) => {
        if (res.status === 200) {
          commit('setUser', username);
          return true;
        }
        return false;
      })
      .catch((error) => {
        throw error;
      });
  },
  logout({ commit }) {
    commit('logout');
  },
  register({ commit }, { username, password }) {
    return authService
      .register({ username, password })
      .then((res) => {
        if (res.status === 200) {
          commit('setUser', username);
          return true;
        }
        return false;
      })
      .catch((error) => {
        throw error;
      });
  },
};

const getters = {
  isAuthenticated: (state) => state.user !== null,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
