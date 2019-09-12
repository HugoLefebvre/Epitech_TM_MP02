import Vue from 'vue'
import Router from 'vue-router'
import WorkingTimes from './components/WorkingTimes/index'
import ClockManager from "./components/ClockManager/index";
import ChartManager from "./components/ChartManager/index";
import HelloWorld from './components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/working-times',
            name: 'home',
            component: WorkingTimes
        },
        {
            path: '/clock-manager',
            name: 'home',
            component: ClockManager
        },
        {
            path: '/chart-manager',
            name: 'home',
            component: ChartManager
        },
        {
            path: '*',
            name: 'home',
            component: HelloWorld
        },
    ]
})
