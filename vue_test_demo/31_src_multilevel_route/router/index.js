import Vue from "vue";
import VueRouter from "vue-router";
import AboutComponent from "@/views/AboutComponent.vue";
import HomeComponent from "@/views/HomeComponent.vue";
import HomeMessage from "@/views/HomeMessage.vue";
import HomeNews from "@/views/HomeNews.vue";


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: AboutComponent
        },
        {
            path: '/home',
            component: HomeComponent,
            children: [
                {
                    path: 'msg',
                    component: HomeMessage
                },
                {
                    path: 'news',
                    component: HomeNews
                }
            ]
        }
    ]
})