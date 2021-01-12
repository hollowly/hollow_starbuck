<!--  -->
<template>
	<div id='box'>
		<img src="@/assets/img/main/register/top.jpg" class="img-fluid">

		<button class="switch">账户密码注册</button>
		<button class="switch">使用星巴克app注册</button>
		
		<form>
			<div class="container-fuild">
				<div class="row">
					<div class="col-sm">
						<div class="form-row">
							<input type="text" placeholder="用户名或电子邮箱" v-model="name" required />
						</div>
						<div class="form-row">
							<input type="text" placeholder="密码" v-model="pwd" required />
						</div>
						<div>
							<div v-if='ismsg'><span style="color:red">{{ msg }}</span></div>
							<div>
								<button class="btn btn-outline-success" @click.prevent='register()' type="submit">
									注册
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>

		<div class="container-fuild top">
			<div class="row">
				<div class="col-sm-8">
					<h4>使用星巴克App进行注册</h4>
					<p>现在就下载<a href="">星巴克App</a>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</p>
					<a href=""><img src="@/assets/img/main/register/download.png" class="download"></a>
				</div>
				<div class="col-sm">
					<img src='@/assets/img/main/register/phone.png' width="200"></div>	
			</div>
		</div>

		<div class="container-fuild bottom">
			<div class="row">
				<div class="col-sm">
					<h4>加入星享俱乐部</h4>
					<p>只需几分钟，便可成功注册星享俱乐部帐户，成为“星”会员，立即开启集星之旅。</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name:null,
			msg:null,
			ismsg:true,
			pwd:null,
			status:0	//判断用户是否存在
		}
	},
	methods: {
		register() {
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
				.post(this.HOST + "/api/register", {
					name: this.name,
					password: this.pwd,
					status: this.status
				})
				.then((result) => {
					this.msg = result.data.msg
					this.status = result.data.status
					if(this.status) {
						alert('注册成功，请点击返回登录页面')
						this.$router.replace('/login')
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},

	mounted() {
		// 判断是否登录，登录就渲染不同的组件
		this.cookiename = this.cookie.getCookie('loginname')
		// 判断没有登录就跳转到登录页面
		if(this.cookiename == null) {
			console.log(this.cookiename);
			this.$router.replace('/register')
		} else {
			this.$router.replace('/account')
		}

		$('div > button').eq(0).click(function() {
			$('form').show()
			$('.top').hide()
		})

		$('div > button').eq(1).click(function() {
			$('.top').show()
			$('form').hide()
		})

		$('.switch').eq(0).click(function() {
			$('.switch').css({'color':'#00a862','background':'white'})
			$(this).css({'color': 'white','background': '#00a862'})
		})
		$('.switch').eq(1).click(function() {
			$('.switch').css({'color':'#00a862','background':'white'})
			$(this).css({'color': 'white','background': '#00a862'})
		})
	}
}
</script>

<style scoped>
	form {
		position: relative;
	}
	#box {
		text-align: center;
	}
	div > button {
		margin: 30px 0px 0px 0px;
		color: #00a862;
		background: white;
    border: 1px solid #00a862;
		outline: none;
	}
	div > .switch:first-of-type {
		width: 120px;
		background: #00a862;
		color: white;
		border-radius: 20px 0px 0px 20px;
	}
	div > .switch:last-of-type {
		width: 170px;
		border-radius: 0px 20px 20px 0px;
	}

	form {
		padding: 50px 0px;
	}
	form  .row > div > div {
		width: 40%;
		margin: 0 auto;
	}
	form  .row > div > div > input {
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
	form .row  input:hover {
		border-bottom: 1px solid #00A862;
	}
	input::placeholder {
		font-weight: 100;
	}
	.top {
		display: none;
	}
	.top > .row {
		margin: 20px auto;
		width: 70%;
		margin-bottom: 40px;
	}
	.top > .row > div:first-child {
		padding-top: 15%;
	}
	.top > .row > div:last-child {
		text-align: center;
	}
	.top > .row > div > h4 {
		margin: 20px 0px;
	}
	.top > .row > div > p > a {
		color: #00A862;
		cursor: pointer;
	}
	.download {
		width: 150px;
		cursor: pointer;
	}

	.bottom {
		text-align: left;
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
	@media screen and (max-width:1300px){
		.top > .row {
			width: 90%;
		}
	}
	@media screen and (max-width:1170px){
		.top > .row {
			width: 100%;
		}
	}
	@media screen and (max-width:875px){
		.top > .row {
			width: 70%;
		}
	}
</style>