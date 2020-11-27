import VueRouter from 'vue-router';
import HomeComponent from "./components/HomeComponent";

export default new VueRouter({
    routes: [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: '/pi',
            component: HomeComponent
        },
    ],
    mode: 'history'
});
