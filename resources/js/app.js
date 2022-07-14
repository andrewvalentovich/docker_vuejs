import Vue from 'vue';
import ArticleComponent from "./components/ArticleComponent";
import Index from './components/Index.vue'
import router from "./router";
import store from "./store";

require('./bootstrap');


const createApp = new Vue({
    el: '#app',

    components: {
        ArticleComponent,
        Index
    },

    router,
    store
});
