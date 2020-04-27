import Vue from 'vue';
import $ from 'jquery';

import Create from '../js/components/Task/Create';
import List from '../js/components/Task/List';

window.$ = $;
window.jQuery = $;

new Vue({
  el: '#app',
  components: {
    'task-create': Create,
    'task-list': List,
  },
}).$mount('#app');