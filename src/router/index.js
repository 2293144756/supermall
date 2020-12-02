import Vue from 'vue'
import VueRouter from 'vue-router'


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)


const Home=()=>import('../view/home/Home.vue')
const Category=()=>import('../view/category/Category.vue')
const Profile=()=>import('../view/profile/Profile.vue')
const Mine=()=>import('../view/mine/Mine.vue')
const Detail=()=>import('../view/detail/Detail')



const routes=[
	{
		path:'',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home,
		meta:{
			title:'首页'
		}
	},
	{
		path:'/category',
		component:Category,
		meta:{
			title:'分类'
		}
	},
	{
		path:'/profile',
		component:Profile,
		meta:{
			title:'购物车'
		}
	},
	{
		path:'/Mine',
		component:Mine,
		meta:{
			title:'我的'
		}
	},
	{
		path:'/detail/:iid',
		component:Detail,
		meta:{
			title:'详情页'
		}
	}
]

 const router = new VueRouter({
	 routes,
	  mode:'history'
 })
 
 router.beforeEach((to , from , next)=>{
	 document.title = to.matched[0].meta.title
	 next()
 })
 
 
 export default router


