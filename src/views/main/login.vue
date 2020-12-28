<!--  -->
<template>
	<div>
		<img src="@/assets/img/main/login/top.jpg" class="img-fluid">
		<div class="container-fuild">
			<div class="row">
				<div class="col-sm-12">
					<div><input type="text" placeholder="用户名或电子邮箱" autocomplete="new-password"></div>
					<div><input type="password" placeholder="密码" autocomplete="new-password"></div>
					<div>
						<span>
							<label for="autologin">
								<input type="checkbox" id='autologin'>下次自动登录
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
						<button class="signbutton">登录</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {

		}
	},

}

</script>

<style scoped>
.container-fuild {
	margin: 50px 0px;
}
.container-fuild > .row > div > div {
	width: 40%;
	margin: 0 auto;
	/* border: 1px solid red; */
}
.container-fuild > .row > div > div > input {
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
.container-fuild > .row > div > div > span:first-child {
	cursor: pointer;
	color: rgba(0, 0, 0, 0.56);
	margin-top: 10px;
	float: left;
}
.container-fuild > .row > div > div > span > a {
	color: #00A862;
	margin-top: 10px;
	float: right;
}
.container-fuild > .row  input:hover {
	border-bottom: 1px solid #00A862;
}
input::placeholder {
	font-weight: 100;
}

.container-fuild > .row > div > div:last-child {
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
</style>