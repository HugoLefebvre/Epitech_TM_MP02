import Vue from 'vue'
import Router from 'vue-router'
import WorkingTimes from './components/WorkingTimes/index'
import ClockManager from "./components/ClockManager/index";
import ChartManager from "./components/ChartManager/index";
import HelloWorld from './components/HelloWorld'
import WorkingTime from './components/WorkingTime/index';
import WorkingTimeCreate from './components/WorkingTimeCreate/index';
import WorkingTimeEdit from './components/WorkingTimeEdit/index';
import Users from './components/UsersManagement/Users/';
import CreateUser from './components/UsersManagement/CreateUser/';
import EditUser from './components/UsersManagement/EditUser/';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/working-times',
            name: 'working-times',
            component: WorkingTimes
        },
        {
            path: '/clock-manager',
            name: 'clock-manager',
            component: ClockManager
        },
        {
            path: '/chart-manager',
            name: 'chart-manager',
            component: ChartManager
        },
        {
            path: '/',
            name: 'home',
            component: HelloWorld
        },
        {
            path: '/working-time/:userID',
            name: 'working-time',
            component: WorkingTime
        }, 
        {
            path: '/working-time/:userID/create',
            name: 'working-time-user-create',
            component: WorkingTimeCreate
        },
        {
            path: '/working-time/:userID/edit/:start&:end',
            name: 'working-time-user-edit',
            component: WorkingTimeEdit
        }, 
        {
            path: '/user',
            name: 'users',
            component: Users
        },
        {
            path: '/user/create-user',
            name: 'create-user',
            component: CreateUser
        },
        {
            path: '/user/edit-user/:userID',
            name: 'edit-user',
            component: EditUser
        }         
    ]
})
