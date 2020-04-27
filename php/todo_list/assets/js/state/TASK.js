import ApiTask from '../api/task';

export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    INITIZALIZE(state) {
      state.list = [];
    },
    INSERT(state, task) {
      state.list.push(task);
    },
  },
  actions: {
    INSERT({ commit }, task) {
      
      return new Promise ((resolve, reject) => {
        ApiTask.findAll().then((response) => {
          console.log(response.data);
          commit('INSERT', task);
          resolve();
        }).catch(() => reject());
      }); 
    },
  },
  getters: {},
};