<!--  -->
<template>
	<div>
		<a href="/register"><img src="@/assets/img/main/login/top.jpg" class="img-fluid"></a>


		<form>
		<div class="rightlogin_phone">
			<p>扫码登录</p>
			<img src="@/assets/img/main/login/login-phone.png" width="110">
		</div>

			<div class="container-fuild top">
				<div class="row">
					<div class="col-sm">
						<div class="form-row">
							<input type="text" placeholder="用户名或电子邮箱" v-model="name" required />
							<!-- <div class="valid-feedback">验证通过</div> -->
							<!-- <div class="invalid-feedback">验证不通过</div> -->
						</div>

						<div class="form-row">
							<input type="text" placeholder="密码" v-model="pwd" required />
							<!-- <div class="valid-feedback">验证通过</div> -->
							<!-- <div class="invalid-feedback">验证不通过</div> -->
						</div>

						<div>
							<span>
								<label for="autologin">
									<input type="checkbox" id='autologin'>
									下次自动登录
								</label>
							</span>
							<span><a href="">忘记密码？</a></span>
						</div>
						
						<div>
							<div v-if='ismsg'><span style="color:red">{{ msg }}</span></div>
							<div>
								<button class="btn btn-outline-success loginbtn " @click.prevent='login()' type="submit">
									登录
								</button>
								<router-link to='/register' class="btn btn-outline-secondary registerbtn">注册</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>

		<div class="qrjoin">
			<div class="rightlogin_computer">
				<p>账号登录</p>
				<img src="@/assets/img/main/login/login-computer.png" width="110">
			</div>

			<p>打开<a href="/apps">星巴克App</a>，在“我”页面右上角点开扫描二维码图标。</p>
			<img src="@/assets/img/main/login/qrcode.png" class="qrcodeimg">
			<img src="@/assets/img/main/login/phone.png">
		</div>



		<div class="container-fuild bottom">
			<div class="row">
				<div class="col-sm">
					<h4>加入星享俱乐部</h4>
					<p>只需几分钟，便可成功注册星享俱乐部帐户，成为“星”会员，立即开启集星之旅。</p>
					<a href='/register'><button class="register">注册</button></a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name:null,	//用户名
			pwd:null,		//密码
			msg:null,		//接收数据
			ismsg:true,//显示和隐藏提示信息
			status:0,//判断用户的登录状态
		}
	},
	mounted() {
		// 验证代码
		(function() {
			'use strict';
			window.addEventListener('load', function() {
				var forms = document.getElementsByClassName('needs-validation');
				var validation = Array.prototype.filter.call(forms, function(form) {
					form.addEventListener('submit', function(event) {
						if (form.checkValidity() === false) {
							event.preventDefault();
							event.stopPropagation();
						}
						form.classList.add('was-validated');
					}, false);
				});
			}, false);
		})();

		$('.rightlogin_phone').click(function() {
			$('.qrjoin').show()
			$('form').hide()
		})
		$('.rightlogin_computer').click(function() {
			$('form').show()
			$('.qrjoin').hide()
		})
	},
	methods: {
		ismsgtime() {
		},
		login() {
			// 3秒后隐藏提示信息
			setTimeout(() => {
				this.ismsg = false
			}, 2000);
			this.ismsg = true

			if(this.name == null) {
				this.msg = '请输入账号'
				return
			} else if(this.pwd == null) {
				this.msg = '请输入密码'
				return
			}
			// 发送请求，给 node.js 来判断和进行数据库的操作
			this.$axios
				.post(this.HOST + "/api/login", {
					name: this.name,
					password: this.pwd,
					status: this.status
				})
				.then((result) => {
					this.msg = result.data.msg
					this.status = result.data.status
					console.log(result.data);
						// 保存cookie
						if(this.status) {
							// 以json格式传给setCookie方法存入信息,方法里面会循环遍历该json以单个数据存储的方式，多次存入cookie中　　　　　　// 注：cookie不支持直接以json的方式存入
							let loginInfo = {
								loginname:this.name,
								// openid:用户为中心的数字身份识别框架,唯一
								openId:"openId" + this.name
							}
							// console.log(loginInfo);
							// 调用setCookie方法，同时传递需要存储的数据，保存天数
							this.cookie.setCookie(loginInfo,3)
							console.log('cookie保存成功');
							// 跳转到首页
							this.$router.push('/')
						}
				})
				.catch((err) => {
					console.log(err);
				});
			
		},
  },
}

</script>

<style scoped>
form {
	position: relative;
}
.loginbtn {
	margin-top: 10px;
	float: right;
	margin-right: 10px;
}
.registerbtn {
	margin-top: 10px;
	float: left;
}
.rightlogin_phone, .rightlogin_computer {
	cursor: pointer;
	position: absolute;
	top: 0;
	right: 0;
	font-size: 10px;
	text-align: center;	
}
.rightlogin_phone > p, .rightlogin_computer > p {
	position: absolute;
	left: 35%;
	top: 0;
}
.qrjoin {
	display: none;
	position: relative;
	padding: 50px 0px;
	text-align: center;
}
.qrjoin > p > a {
	color: #00A862;
}
.qrjoin > img {
	margin-top: 50px;
	width: 150px;
}
.qrjoin > .qrcodeimg{
	width: 220px;
	margin-right: 5%;
}


.top {
	padding: 50px 0px;
}
.top > .row > div > div {
	width: 40%;
	margin: 0 auto;
}
.top > .row > div > div > input {
	width: 100%;
	margin-bottom: 20px;
	font-weight: 700;
	height: 50px;
	border: none;
	padding: 4px 0px;
	outline: none;
	border-bottom: 1px solid rgba(0, 0, 0, 0.12);
	transition: all .4s;
}
#autologin {
	border: 1px solid #00A862;
  border-radius: 8px;
}
.top > .row > div > div > span:first-child {
	cursor: pointer;
	color: rgba(0, 0, 0, 0.56);
	margin-top: 10px;
	float: left;
}
.top > .row > div > div > span > a {
	color: #00A862;
	margin-top: 10px;
	float: right;
}
.top > .row  input:hover {
	border-bottom: 1px solid #00A862;
}
input::placeholder {
	font-weight: 100;
}
.top > .row > div > div:last-child {
	margin-top: 60px;
}
.signbutton {
	margin-top: 20px;
	float: right;
	border: none;
	box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.38);
	background: #f7f7f7;
  border-color: #f7f7f7;
	padding: 10px 20px;
	border-radius: 50px;
	font-weight: 700;
  color: rgba(0, 0, 0, 0.38);
  cursor: pointer;
	outline: none;
}

.bottom {
	padding: 35px 0px 60px 0px;
	background: rgb(21,119,123);
	color: white;
}
.bottom > .row {
	width: 75%;
	margin: 0 auto;
}
.bottom > .row > div > p {
	padding: 15px 0px;
	color: #D8D8D8;
}
.register {
	padding: 8px 18px;
	font-size: 17px;
	text-align: center;
	margin: 0px 20px 0px 0px;
	border: 1px solid #C2A661;
	border-radius: 48px;
	color: #C2A661;
	background: none;
	outline: none;
	cursor: pointer;
	font-weight: 400;
}
</style>