/*
 * @Author: mojianpei
 * @description:
 * @Date: 2020-08-03 16:49:07
 * @LastEditors: 莫靓仔
 * @LastEditTime: 2021-08-13 16:27:24
 */

import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from 'cmt/HelloWorld'

Vue.use(Router)

const Body = resolve => {
    require(['cmt/body'], resolve)
}
const Attrs = resolve => {
    require(['v/attrs'], resolve)
}

const Banner = resolve => {
    require(['cmt/banner'], resolve)
}

const Nofund = resolve => {
    require(['cmt/nofund'], resolve)
}

const Menu = resolve => {
    require(['cmt/menu'], resolve)
}

const toolTip = resolve => {
    require(['v/toolTip'], resolve)
}
const editor = resolve => {
    require(['v/editor'], resolve)
}
const baseTree = resolve => {
    require(['v/tree'], resolve)
}

const User = () => import(/* webpackChunkName: 'abcd' */ 'cmt/user')
const Name = () => import(/* webpackChunkName: 'abcd' */ 'cmt/name')
const List = () => import(/* webpackChunkName: 'abcd' */ 'cmt/list')

// 这里的routes需要concat，不能用const
let routes = [
    {
        path: '/',
        alias: '/home',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            title: '首页'
        }
    },
    {
        path: '/toolTip',
        name: 'toolTip',
        component: toolTip,
        meta: {
            title: 'toolTip'
        }
    },
    {
        path: '/editor',
        name: 'editor',
        component: editor,
        meta: {
            title: 'editor'
        }
    },
    {
        path: '/baseTree',
        name: 'baseTree',
        component: baseTree,
        meta: {
            title: 'baseTree'
        }
    },
    {
        path: '/attrs',
        name: 'attrs',
        component: Attrs,
        meta: {
            title: 'attrs'
        }
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        meta: {
            title: 'User'
        }
    },
    {
        path: '/name',
        name: 'Name',
        component: Name,
        meta: {
            title: 'Name'
        }
    },
    {
        path: '/list',
        name: 'List',
        component: List,
        meta: {
            title: 'List'
        }
    },
    {
        path: '/body',
        name: 'Body',
        component: Body,
        meta: {
            title: 'Body'
        }
    },
    {
        path: '/banner',
        name: 'Banner',
        component: Banner,
        meta: {
            title: 'Banner'
        }
    },
    {
        path: '/menu',
        name: 'Menu',
        component: Menu,
        meta: {
            title: 'Menu'
        }
    },
    {
        path: '/*',
        name: 'nofund',
        component: Nofund,
        meta: {
            title: Nofund
        }
    }
]
const router = new Router({
    routes
})

export default router
