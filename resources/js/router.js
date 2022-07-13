import { createRouter, createWebHistory } from "vue-router";
import ArticleComponent from "./components/ArticleComponent";
import Index from "./components/Person/Index";
import Create from "./components/Person/Create";
import Edit from "./components/Person/Edit";
import Show from "./components/Person/Show";

const routes = [
    {
        path: '/',
        component: ArticleComponent
    },
    {
        path: '/people/',
        component: Index,
        name: 'person.index'
    },
    {
        path: '/people/create',
        component: Create,
        name: 'person.create'
    },
    {
        path: '/people/:id/edit',
        component: Edit, // переменные записываются через :
        name: 'person.edit'
    },
    {
        path: '/people/:id',
        component: Show, // переменные записываются через :
        name: 'person.show'
    },
];

export default createRouter({
    routes: routes,
    history: createWebHistory(),
});
