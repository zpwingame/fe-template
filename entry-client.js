import Vue from 'vue'
import {
    createApp
} from './app'

// 客户端特定引导逻辑……

const {
    app,store,router
} = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

Vue.mixin({
    beforeMount() {
        console.log('before mount')
        const {
            asyncData
        } = this.$options
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            })
        }
    }
})

// 这里假定 App.vue 模板中根元素具有 `id="app"`
app.$mount('#app')