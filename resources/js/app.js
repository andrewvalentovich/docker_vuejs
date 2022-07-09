import Vue from 'vue';
import ArticleComponent from "./components/ArticleComponent";
import router from "./router";
import Index from "./components/Index";

require('./bootstrap');

const app = new Vue({
    el: '#app',

    components: {
        ArticleComponent,
        Index
    },

    router
});
