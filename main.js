// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// 请求库
import { $http } from '@escook/request-miniprogram'
// 注册到uni
uni.$http = $http

// 请求根路径
$http.baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1/'

// 请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...',
	})
}

// 响应拦截器
$http.afterRequest = function() {
	uni.hideLoading()
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
