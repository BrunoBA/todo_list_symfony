import Vue from 'vue';
import $ from 'jquery';

import Create from '../js/components/Task/Create';
import List from '../js/components/Task/List';

window.$ = $;
window.jQuery = $;

//npm i vue2-timepicker
//npm i vuejs-datepicker

new Vue({
    el: '#app',
    components: {
        'task-create': Create,
        'task-list': List
    }
}).$mount('#app');