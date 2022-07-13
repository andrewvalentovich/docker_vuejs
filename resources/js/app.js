// import Vue from 'vue';
// import ArticleComponent from "./components/ArticleComponent";

require('./bootstrap');



import { createApp } from 'vue';
import Index from './components/Index.vue'
import router from "./router";

const app = createApp(Index);
app.use(router);
app.mount("#app");



// const createApp = new Vue({
//     el: '#app',
//
//     components: {
//         ArticleComponent,
//         Index
//     },
//
//     router
// });
