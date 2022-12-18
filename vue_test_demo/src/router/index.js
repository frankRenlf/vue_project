import Vue from "vue";
import VueRouter from "vue-router";
import AboutComponent from "@/views/AboutComponent.vue";
import HomeComponent from "@/views/HomeComponent.vue";
import HomeMessage from "@/views/HomeMessage.vue";
import HomeNews from "@/views/HomeNews.vue";
import HomeMessageDetail from "@/views/HomeMessageDetail.vue";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            name: 'aboutinfo',
            path: '/about',
            component: AboutComponent
        },
        {
            name: 'homeinfo',
            path: '/home',
            component: HomeComponent,
            children: [
                {
                    name: 'msg',
                    path: 'msg',
                    component: HomeMessage,
                    children: [
                        {
                            name: 'detail_info',
                            path: 'detail/:id/:name',
                            component: HomeMessageDetail,
                            props({params, query}) {
                                return {
                                    id: params.id,
                                    name: params.name,
                                    id2: query.id
                                }
                            }
                        }
                    ]
                },
                {
                    name: 'news',
                    path: 'news',
                    component: HomeNews
                }
            ]
        }
    ]
})

export default router