
import axios from 'axios'

export function request(config) {
	// 1.创建axios的实例
	const instance = axios.create({
		baseURL: '/api',
		timeout:5000
	})

	// 2.axios的拦截器
		// 2.1请求拦截的作用
		// 2.1.1.config中的一些信息不符合服务器的要去
		// 2.1.2.每次发送网络请求时,都希望在界面中显示一个请求的图标
		// 2.1.3.某些网络请求(登录(token))，会携带一些特殊信息
	instance.interceptors.request.use(config => {
		// console.log(config);
		return config
	}, err => {
		console.log(err);
	})

	// 2.2响应拦截
	instance.interceptors.request.use(res => {
		// console.log(res);
		return res
	}, err => {
		console.log(err);
	})


	// 3.发送真正的网络请求
	return instance(config)
}
