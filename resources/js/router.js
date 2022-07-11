import Vue from 'vue';
import VueRouter from "vue-router";
import ArticleComponent from "./components/Routes/ArticleComponent";
import TagComponent from "./components/Routes/TagComponent";

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/article',
            component: ArticleComponent
        },
        {
            path: '/tag',
            component: TagComponent
        },
        {
            path: '/people', component: () => import('./components/Person/Index'),
            name: 'person.index'
        },
        {
            path: '/people/create', component: () => import('./components/Person/Create'),
            name: 'person.create'
        },
    ]
});
