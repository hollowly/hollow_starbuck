/* 对 cookie 进行一步封装，并导出setCookie,getCookie,clearCookie
在其他地方可以使用
this.cookie.setCookie()   //存cookie
this.cookie.getCookie()  //读cookie
this.cookie.clearCookie()   //删cookie
来对 cookie 进行操作，前提是要在 main.js 中全局注册cookie
*/
/**
 * @description 保存cookie
 * @param {Object} json 需要存储cookie的对象
 * @param {Number} days 默认存储多少天
 */
function setCookie(json, days) {
	// 设置过期时间
	let data = new Date(
			new Date().getTime() + days * 24 * 60 * 60 * 1000
	).toUTCString();

	for (var key in json) {
			document.cookie = key + "=" + json[key] + "; expires=" + data;
	}
}

/** 
* @description 获取cookie
* @param {String} name 需要获取cookie的key
*/
function getCookie(name) {
	var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (arr != null) {
			return unescape(arr[2])
	} else {
			return null
	}
}

/** 
* @description 删除cookie
* @param {String} name 需要删除cookie的key
*/
function clearCookie(name) {
	let json = {};
	json[name] = '';
	setCookie(json, -1)
}

export default {
	setCookie,
	getCookie,
	clearCookie
}