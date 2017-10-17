import Vue from 'vue'
import Router from 'vue-router'
/*import HelloWorld from '@/components/HelloWorld'*/
import Home from '../views/Home.vue'
import Detaile from '../views/Detaile.vue'
import view from '../views/view.vue'
import food from '../views/food.vue'
import shop from '../views/shop.vue'
import hotel from '../views/hotel.vue'
import traffic from '../views/traffic.vue'
import routes from '../views/routes.vue'
import route from '../views/route.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detaile',
      component: Detaile
    },
    {
      path: '/view',
      name: 'view',
      component: view
    },
    {
      path: '/food',
      name: 'food',
      component: food
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: hotel
    },
    {
      path: '/traffic',
      name: 'traffic',
      component: traffic
    },
    {
      path: '/routes',
      name: 'routes',
      component: routes
    },
    {
      path: '/route',
      name: 'route',
      component: route
    }
  ]
})
