<!--  -->
<template>
	<div>
		<a href="/register"><img src="@/assets/img/main/login/top.jpg" class="img-fluid"></a>

		<form>
			<div class="container-fuild top">
				<div class="row">
					<div class="col-sm">
						<div><input type="text" placeholder="用户名或电子邮箱" v-model="name" required /></div>
						<div><input type="text" placeholder="密码" v-model="pwd" required /></div>
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
							<!-- <btn @click.prevent='login()'>登录</btn> -->
	<div id='btnSvg'>
		<button class="btn" @click.prevent='login()'>
				<span>
					登录
				</span>
			<svg width="0" height="0">
				<defs>
					<filter id="goo" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
					</filter>
					<filter id="goo-light" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
						<feGaussianBlur in="SourceGraphic" stdDeviation="1.25" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
					</filter>
					<filter id="goo-big" x="-50%" width="200%" y="-50%" height="200%" color-interpolation-filters="sRGB">
						<feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
						<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" result="cm" />
					</filter>
				</defs>
			</svg>
			<svg preserveAspectRatio="none" viewBox="0 0 132 45">
				<g clip-path="url(#clip)" filter="url(#goo-big)">
					<circle class="top-left" cx="49.5" cy="-0.5" r="26.5" />
					<circle class="middle-bottom" cx="70.5" cy="40.5" r="26.5" />
					<circle class="top-right" cx="104" cy="6.5" r="27" />
					<circle class="right-bottom" cx="123.5" cy="36.5" r="26.5" />
					<circle class="left-bottom" cx="16.5" cy="28" r="30" />
				</g>
				<defs>
					<clipPath id="clip">
						<rect width="132" height="45" rx="7" />
					</clipPath>
				</defs>
			</svg>
		</button>
	</div>
							<div> {{ msg }}</div>
						</div>
					</div>
				</div>
			</div>
		</form>

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
import btn from '@/components/btn'

export default {
	data() {
		return {
			name:null,
			pwd:null,
			msg:null,	//接收数据
		}
	},
	methods: {
		login() {
			this.$axios
				.post(this.HOST + "/api/login", {
					name: this.name,
					password: this.pwd,
				})
				.then((result) => {
					console.log(result.data);
					this.msg = result.data.msg;
				})
				.catch((err) => {
					alert(result.data)
					console.log(err);
				});
		},
  },
	components: {
		btn
	}
}

</script>

<style scoped>
.top {
	margin: 50px 0px;
}
.top > .row > div > div {
	width: 40%;
	margin: 0 auto;
	/* border: 1px solid red; */
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