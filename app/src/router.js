import Vue from 'vue'
import Router from 'vue-router'
import WorkingTimes from './components/WorkingTimes/index'
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: WorkingTimes
        },
        {
            path: '*',
            name: 'home',
            component: HelloWorld
        },
    ]
})
