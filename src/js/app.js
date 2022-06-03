import Vue from 'vue'
import Popup from './Popup.vue'

const app = new Vue({
    el: '#app',
    render: createElement => createElement(Popup)
})