import Vue from "vue";
import ArticleComponent from "./components/ArticleComponent"

require('./bootstrap');


const app = new Vue({
    el: '#app',

    components: {
        ArticleComponent,
    }
});
