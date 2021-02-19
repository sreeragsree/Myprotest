import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue"
import login from "../views/login.vue";
import UserRegistration from "../views/UserRegistration.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
            // () =>
            //     import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/login",
        name: "login",
        component: login
            // () =>
            //     import ( /* webpackChunkName: "login" */ "../views/login.vue")
    },
    {
        path: "/UserRegistration",
        name: "UserRegistration",
        component: UserRegistration
            //      () =>
            //         import ( /* webpackChunkName: "Registration" */ "../views/UserRegistration.vue")
    },

];

const router = new VueRouter({
    routes
});

export default router;