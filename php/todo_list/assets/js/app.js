import '../css/app.css';
import $ from 'jquery';
import "bootstrap";
import Vue from 'vue';
import App from './components/App';
import '../css/app.css';

window.$ = $;
window.jQuery = $;

new Vue({
    el: '#app',
    render: h => h(App)
});
