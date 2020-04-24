import Vue from 'vue';
import $ from 'jquery';

import App from './components/App';
import Task from './components/Task';

window.$ = $;
window.jQuery = $;

new Vue({
    el: '#app',
    components: { App, Task }
}).$mount('#app');