import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: () =>
        import ('../views/index.vue'),
    children: [{
        path: '/index',
        redirect: '/index/pc'
    }, {
        path: '/index/pc',
        component: () =>
            import ('../views/pc.vue')
    }, {
        path: '/index/m',
        component: () =>
            import ('../views/m.vue')
    }]
}];

const router = new VueRouter({
    routes,
});

export default router;