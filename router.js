import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter() {
    return new Router({
        mode: 'history',
        fallback: false,
        routes: [{
                path: '/',
                component: () =>
                    import ('./components/Home.vue')
            },
            {
                path: '/item/:id',
                component: () =>
                    import ('./components/Item.vue')
            },
            , {
                path: '/top',
                component: () =>
                    import ('./components/Top.vue')
            }, {
                path: '/new',
                component: () =>
                    import ('./components/New.vue')
            }, {
                path: '/show',
                component: () =>
                    import ('./components/Item.vue')
            }, {
                path: '/ask',
                component: () =>
                    import ('./components/Item.vue')
            }
        ]
    })
}