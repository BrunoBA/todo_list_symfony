import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import TASK from './state/TASK';

export default new Vuex.Store({
  modules: {
    TASK,
  }
});