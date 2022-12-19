import Vue from "vue";
import VueRouter from "vue-router";
import AboutComponent from "@/views/AboutComponent.vue";
import HomeComponent from "@/views/HomeComponent.vue";
import HomeMessage from "@/views/HomeMessage.vue";
import HomeNews from "@/views/HomeNews.vue";
import HomeMessageDetail from "@/views/HomeMessageDetail.vue";


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'about',
            path: '/about',
            component: AboutComponent,
            meta: {
                authorise: true,
                title: 'about'
            }
        },
        {
            name: 'home',
            path: '/home',
            component: HomeComponent,
            children: [
                {
                    name: 'msg',
                    path: 'msg',
                    component: HomeMessage,
                    children: [
                        {
                            name: 'detail',
                            path: 'detail/:id/:name',
                            component: HomeMessageDetail,
                            props({params, query}) {
                                return {
                                    id: params.id,
                                    name: params.name,
                                    id2: query.id
                                }
                            },
                            meta: {
                                title: 'detail'
                            }
                        }
                    ],
                    meta: {
                        title: 'msg'
                    }
                },
                {
                    name: 'news',
                    path: 'news',
                    component: HomeNews,
                    meta: {
                        title: 'news'
                    },
                    beforeEnter(to, from, next) {
                        if (localStorage.getItem("name") === 'james') {
                            next()
                        } else {
                            alert("no permission")
                        }
                    }
                }
            ],
            meta: {
                authorise: true,
                title: 'home'
            }
        }
    ]
})

// router.beforeEach((to, from, next) => {
//     console.log('to', to)
//     console.log('from', from)
//     if (to.meta.authorise) {
//         if (localStorage.getItem("name") === "james") {
//             next()
//         } else {
//             alert("Insufficient permissions")
//         }
//     } else {
//         next()
//     }
// })

router.afterEach((to, from) => {
    document.title = to.meta.title || 'default'
})


export default router