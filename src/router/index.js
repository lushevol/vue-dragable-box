/*
 * @Description: 
 * @Author: lushevol
 * @Date: 2020-02-16 11:01:12
 * @LastEditors: lushevol
 * @LastEditTime: 2020-02-16 15:58:17
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '../index.vue'
import baseVue from '../base.vue'
import chartVue from '../chart.vue'
import power500 from '../power500.vue'
import power1000 from '../power1000.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/base',
        component: baseVue
    }, {
        path: '/chart',
        component: chartVue
    }, {
        path: '/power500',
        component: power500
    }, {
        path: '/power1000',
        component: power1000
    }]
})
