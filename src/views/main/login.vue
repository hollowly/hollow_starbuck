<!--  -->
<template>
	<div>
		<a href="/register"><img src="@/assets/img/main/login/top.jpg" class="img-fluid"></a>
		<div class="container-fuild top">
			<div class="row">
				<div class="col-sm">
					<div><input type="text" placeholder="用户名或电子邮箱" autocomplete="new-password"></div>
					<div><input type="password" placeholder="密码" autocomplete="new-password"></div>
					<div>
						<span>
							<label for="autologin">
								<input type="checkbox" id='autologin'>
								下次自动登录
							</label>
						</span>
						<span><a href="">忘记密码？</a></span>
					</div>
					<div class="item captchaWrapper">
						<div style="width: 300px; height: 230px; margin: 0px auto; position: relative; z-index: 0;">
							<iframe frameborder="0" border="0" marginheight="0" marginwidth="0" scrolling="no" id="tcaptcha_iframe" style="width: 300px; height: 230px; border: 0px; position: relative; left: 0px; top: 0px; z-index: 2000000002; background: rgb(255, 255, 255);" src="https://t.captcha.qq.com/cap_union_new_show?aid=2045345034&amp;protocol=https&amp;accver=1&amp;showtype=embed&amp;ua=TW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzg3LjAuNDI4MC42NiBTYWZhcmkvNTM3LjM2&amp;noheader=1&amp;fb=1&amp;enableDarkMode=0&amp;grayscale=1&amp;clientype=2&amp;sess=s0C52V7xpLXGN6OCWqXDL5ch4QSADk0MlapPS_oXhv6gCn-msUFqe2GlF7E8r0AVJYs3qRl6fl6z4oT-q-IJTbEo0URhkbRCmV0EXpLgvNF73tNX3mxEwr2fTdLaB1cTvhhbNXReFiwhd1COy3y7B3trI5RczegfiIOGpXYJshjF3xmHQH6YBSl7E_rYFLzLtlc7TcRvo4Y5b6J9RaQmN1mhhH_tvU-HIPTljvzBXfqBTILqshMihVES-7NsXOhhkfKBbF5cSahj8-U3FSg_US2A**&amp;fwidth=0&amp;sid=6749306880106127360&amp;forcestyle=undefined&amp;wxLang=&amp;tcScale=1&amp;uid=&amp;cap_cd=&amp;rnd=639923&amp;TCapIframeLoadTime=undefined&amp;prehandleLoadTime=106&amp;createIframeStart=1609160157318&amp;subsid=2">
							</iframe>
						</div>
					</div>
					<div>
						<btn>登录</btn>
					</div>
				</div>
			</div>
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
import btn from '@/components/btn'

export default {
	data () {
		return {

		}
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