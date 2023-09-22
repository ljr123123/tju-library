/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import Cookies from 'js-cookie'

const routes = [
  {
    path:"/",
    redirect:"/login",
  },
  {
    path:"/login",
    component:() => import("@/views/Public/loginView.vue")
  },
  {
    path:"/user",
    component:() => import("@/views/User/mainContent.vue"),
    children:[
      {
        path:"",
        component:() => import("@/views/User/homePage.vue")
      },
      {
        path:"submit",
        component:() => import("@/views/User/submitView.vue")
      },
      {
        path:"detail",
        component:() => import("@/views/User/detailView.vue")
      },
      {
        path:"info",
        component:() => import("@/views/User/infoView.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const username = Cookies.get("username");
  const is_admin = Cookies.get("admin");

  if(!username && to.path != "/login")router.push("/login");
  
  next();
})

export default router
