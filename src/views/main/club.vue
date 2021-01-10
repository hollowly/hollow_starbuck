<!--  -->
<template>
	<div>
		<a href="/register"><img src="@/assets/img/main/club/top.jpeg" class='img-fluid'></a>

		<!-- 星享俱乐部 -->
		<club class="rewards">
			<img src="@/assets/img/main/club/rewards-title.png" width="260" slot='titleImg'>
			<div class="col-sm" v-for='item in rewards' slot='container'>
				<img :src="$host + item.imgUrl" width="120">
				<h5>{{item.title}}</h5>
				<p>{{item.p}}</p>
			</div>
			<img src="@/assets/img/main/club/rewards-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 积分升级 -->
		<club class="upgrade">
			<img src="@/assets/img/main/club/upgrade-title.png" width="380" slot='titleImg'>
			<div class="col-sm" v-for='item in upgrade' slot='container'>
				<img :src="$host + item.imgUrl" width="150">
				<p>{{item.p1_1}}<span>{{item.p1_span}}</span>{{item.p1_2}}</p>
				<p>{{item.p2_1}}<span style="color:#00A862">{{item.p2_span}}</span>{{item.p2_2}}</p>
				<p>{{item.p3_1}}<span style="color:#C2A661">{{item.p3_span}}</span>{{item.p3_2}}</p>
			</div>
			<img src="@/assets/img/main/club/upgrade-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 等级会员权益 -->
		<club class="stars">
			<img src="@/assets/img/main/club/stars-title.png" width="240" slot='titleImg'>
			<div class="col-sm" v-for='item in stars' slot='container'>
				<img :src="$host + item.imgUrl" width="150">
				<div></div>
					<ul>
						<li>{{item.text[0]}}</li>
						<li>{{item.text[1]}}</li>
						<li>{{item.text[2]}}</li>
						<li>{{item.text[3]}}</li>
						<li>{{item.text[4]}}</li>
					</ul>
			</div>
			<img src="@/assets/img/main/club/stars-banner.png" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 会员星礼包 -->
		<div class="container-fuild giftbag">
			<img src="@/assets/img/main/club/giftbag-title.png" width="320">
			<div class="row">
				<div class="col-sm">
					<img src="@/assets/img/main/club/giftbag1.png" width="70%">
				</div>
				<div class="col-sm">
					<img src="@/assets/img/main/club/giftbag2.png" width="80%">
				</div>
				<div class="col-sm">
					<h6>选购会员星礼包，丰富好礼随心享：</h6>
					<ul>
						<li>6张电子好礼券*，适用多种商品种类</li>
						<li>附赠一张精美星礼卡**，可绑定至星巴克中国App 内充值并支付</li>
						<li>银星级会员初次将会员星礼包成功绑定至帐户后，即可升级成为玉星级会员</li>
					</ul>
					<p>* 每份券将在添加至您的星享俱乐部帐户的当天生效，有效期为90天。** 附赠星礼卡的初始余额为0元。</p>
				</div>
			</div>
				<p class="treaty">详情以<span>《星享俱乐部活动的条款和条件》</span>的规定为准</p>
				<img src="@/assets/img/main/club/giftbag-banner.jpg" class="img-fluid" slot='footerImg'>
		</div>

		<!-- 更多获得星星的途径 -->
		<club class="channel">
			<img src="@/assets/img/main/club/channel-title.png" width="280" slot='titleImg'>
			<div class="col-sm" v-for='item in channel' slot='container'>
				<img :src="$host + item.imgUrl" height="70">
				<p>{{item.p1}}</p>
				<p>{{item.p2}}</p>
			</div>
			<img src="@/assets/img/main/club/channel-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>

		<!-- 注册加入我们 -->
		<club class="join">
			<img src="@/assets/img/main/club/join-title.png" width="360" slot='titleImg'>
			<div class="col-sm" v-for='item in join' slot='container'>
				<h4>{{item.title}}</h4>
				<p>{{item.p1}}</p>
				<p>{{item.p2}}</p>
				<a :href="item.aUrl"><button>{{item.text}}</button></a>
			</div>
			<img src="@/assets/img/main/club/join-banner.jpg" class="img-fluid" slot='footerImg'>
		</club>
		
		<!-- 常见问题 -->
		<club class="question">
			<img src="@/assets/img/main/club/question-title.png" width="320" slot='titleImg'>
			<div class="accordion" id="accordionExample" slot='container'>

				<div class="card">
					<div class="card-header" id="headingOne">
						<h2 class="mb-0">
							<button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
								<img src="@/assets/img/main/club/question1.svg"><span>加入星享俱乐部</span>
							</button>
						</h2>
					</div>
					<div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
						<div class="card-body">
							<p>1.1   什么是星享俱乐部？</p>
							<p class="p-container">星享俱乐部是星巴克推出的顾客忠诚计划。您可以通过注册星享俱乐部帐户成为星享俱乐部会员，并通过消费累积“星星”、享受会员权益。</p>
							<p>1.2   如何加入星享俱乐部？</p>
							<p class="p-container">您可以通过星巴克中国移动应用（以下简称“<span>星巴克App</span>”）、其他星巴克线上渠道或者星巴克指定的第三方合作伙伴（以下简称“<span>合作伙伴</span>”）的渠道，按照相关指引注册星享俱乐部帐户。自您成功注册了星享俱乐部帐户之日（以下简称“<span>帐户注册日</span>”）起，您就成为了星享俱乐部会员（以下简称“<span>会员</span>”）。</p>
							<p>1.3   通过星巴克App和通过其他渠道加入星享俱乐部有什么不同？</p>
							<p class="p-container">没有不同。无论您是通过星巴克App或者通过其他渠道加入星享俱乐部，您都可以享受到相同的会员权益。</p>
							<p>1.4   如何登录和使用我的星享俱乐部帐户？</p>
							<p class="p-container">您可以在星巴克App或合作伙伴的App上登录您的星享俱乐部帐户，消费积星、查看会员等级、星星和好礼、使用好礼或好礼星星等。通过不同渠道可使用的星享俱乐部帐户的功能以该渠道届时开放的实际功能为准。</p>
						</div>
					</div>
				</div>

				<div class="card" style="background:rgb(235,243,245)">
					<div class="card-header" id="headingTwo">
						<h2 class="mb-0">
							<button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								<img src="@/assets/img/main/club/question2.svg"><span>会员等级和好礼</span>
							</button>
						</h2>
					</div>
					<div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
						<div class="card-body">
<p>2.1   星星有什么用？</p>
<p class="p-container">在成功注册星享俱乐部帐户后，您每次在参加星享俱乐部活动的星巴克门店或通过星巴克App以及星巴克不时指定的其他渠道购买产品（不包括会员星礼包、星礼卡等产品，详见本问答第2.4问，以下简称“<span>除外商品</span>”）时，可以在您的星享俱乐部帐户中累积星星。</p>
<p class="p-container">星星分为等级星星，基础好礼星星和奖励好礼星星。“ 等级星星 ”是指用于确定会员等级的积分。当等级星星累积达到一定的数量时，您将从银星级会员升级为玉星级会员或者从玉星级会员升级为金星级会员，并且可以享受该等级所对应的会员礼遇。“基础好礼星星”和“<span>奖励好礼星星</span>”，合称为“好礼星星”，是指金星级会员专享的可用于兑换星巴克不时指定的产品和参与或兑换星巴克不时指定的权益的积分，奖励好礼星星的有效期短于基础好礼星星。</p>
<p>2.2   如何获得和累积星星？</p>
<p class="p-container">在您注册星享俱乐部帐户之后，您每次到参加星享俱乐部活动的星巴克门店、通过星巴克App以及星巴克不时指定的其他渠道购买产品（不包括除外商品）时，您可以通过星巴克App或合作伙伴的渠道登录您的星享俱乐部帐户，点击帐户首页“我的二维码”后，向店内咖啡师出示页面上所呈现的动态二维码，或者出示您星享俱乐部帐户中的任意一张星礼卡或星享卡活跃卡，当POS机具成功读取动态二维码、或星礼卡或星享卡活跃卡时，您的购买金额就将记录在您的星享俱乐部帐户中。</p>
<p class="p-container">当您使用有效付款方式付款的情况下，您支付的购买金额除以50，并按四舍五入保留到小数点后第四位的结果，即为可记录在您帐户中的等级星星和基础好礼星星（若您当时是金星级会员）的数量。星星会在交易完成后的24小时内记录在您的星享俱乐部帐户中。</p>
<p class="p-container">星巴克可能会不时制定一种或多种活动方案帮助会员加速积星。在您的购买适用该等活动方案的情况下，星巴克将根据该等活动方案相应的折算规则在您的星享俱乐部帐户中增加相应数量的额外的等级星星或奖励好礼星星。</p>
<p class="p-container">请注意，如果因各种原因而导致购买未成功，例如产生了纠纷或者您退回了所买的产品，那么星巴克有权撤销您帐户里因为此次购买而获得的相应数量的星星。</p>
<p>2.3   在哪些渠道消费可以累积星星？</p>
<p class="p-container">前往参加星享俱乐部活动的星巴克门店购买产品（不包括除外商品）、通过星巴克App使用星巴克“啡快-在线点 到店取”以及/或“专星送”服务购买星巴克产品、通过星巴克官方合作伙伴（盒马除外）平台上推出的“啡快-在线点 到店取”以及/或“星巴克专星送”官方品牌店订购产品或者通过星巴克会员天猫官方旗舰店购买指定产品均可累积星星。请注意，就饿了么、淘宝等合作伙伴的渠道而言，会员需要先将其账号与星享俱乐部帐户绑定才能累积星星。</p>
<p>2.4   哪些产品的购买金额不能被计入到星享俱乐部帐户中以累积星星？</p>
<p class="p-container">购买会员星礼包、星礼卡（含为星礼卡充值的金额）、各类星巴克礼品券、兑换券的金额不能被计入到星享俱乐部帐户中；享受优惠或折扣的大宗商品购买的金额不能被计入到星享俱乐部帐户中。您在星巴克天猫旗舰店、用星说平台等线上渠道购买预付卡券时，消费额不可以计入到星享俱乐部帐户中，但使用上述预付卡券在星巴克门店以及星巴克指定的渠道购买或兑换产品时，相应的消费额可以计入到星享俱乐部帐户中。任何形式的赠饮（例如您通过参加信用卡“买一赠一”推广活动、信用卡积分兑换饮品活动或凭兑换券获赠的饮品）均不视为购买，无法在星享俱乐部帐户中累积星星。此外，星巴克有权不时指定不能计入到星享俱乐部帐户中累积星星的产品购买。</p>
<p>2.5   星星会过期吗？</p>
<p class="p-container">等级星星：如您是银星级会员，自帐户注册日起，如您未在连续三个日历月内累积满4颗等级星星或满足其他符合升级条件的话，您帐户中所累积的等级星星将在连续三个日历月届满后被清零。</p>
<p class="p-container">如您是玉星级或金星级会员，您帐户中所累积的等级星星在您星享俱乐部帐户的每个帐户周年复审日被清零。帐户周年复审日指的是您从银星级会员升级成为玉星级会员、或从银星级会员直接升级成为金星级会员之日起，每满12个日历月的周年日。</p>
<p class="p-container">基础好礼星星：如您是金星级会员，您帐户中所累积的基础好礼星星将在其记入帐户之日起生效，并在记入帐户后的下一个公历年度的同一个月份的最后一天到期失效并被清除；但是，如您在某帐户周年复审日起被降至玉星级，那么您帐户中所累积的全部基础好礼星星也将在该帐户周年复审日到期失效并被清除。</p>
<p class="p-container font-italic">例如：金星级会员王女士的星享俱乐部帐户中在2020年4月1日累积了1颗基础好礼星星，该基础好礼星星应于2021年4月30日到期失效并被清除。但如果王女士在2021年3月9日的帐户周年复审日被降为玉星级会员，那么在2020年4月1日记入她星享俱乐部帐户中的这1颗基础好礼星星将在该帐户周年复审日当天到期失效并被清除。</p>
<p class="p-container">奖励好礼星星：星巴克可能会不时制定一种或多种活动方案用于折算奖励好礼星星，该等活动方案及折算奖励好礼星星的规则应在星巴克中国官网和/或星巴克App上公布。奖励好礼星星的有效期以星巴克中国官网和/或星巴克App上公布的活动规则为准，奖励好礼星星的有效期短于基础好礼星星。</p>
<p>2.6   如何升级我的会员等级？</p>
<p class="p-container">在您成功注册星享俱乐部帐户后，您即成为银星级会员。自帐户注册日起，当您的星享俱乐部帐户在连续三个日历月中累积满4颗等级星星时，您就可以晋升为玉星级会员；同时，您星享俱乐部帐户中将被清除4颗等级星星，剩余的等级星星（若有）将被保留。</p>
<p class="p-container">此外，银星级会员也可以通过其他方式升级，例如：当银星级会员的帐户中首次绑定一份会员星礼包时，银星级会员也可以晋升为玉星级会员。在升级完成时，银星级会员帐户中所累积的全部等级星星将被清零。</p>
<p class="p-container">当玉星级会员在一个帐户周年内累积满16颗等级星星时，就可以晋升为金星级会员。</p>
<p>2.7   如何保留我的玉星级会员等级？</p>
<p class="p-container">一旦您成为玉星级会员，在您的星享俱乐部帐户存续期间，您不会被降级为银星级会员；但如果您退回了您购买的商品或发生其他导致您不符合晋升至玉星级的条件时，星巴克有权在相关购买被撤销的当日，将您从玉星级降级至银星级。</p>
<p>2.8   如何保留我的金星级会员等级？</p>
<p class="p-container">星巴克会在您的星享俱乐部帐户的每个帐户周年复审日，检查您帐户在前一个帐户年度中所累积的等级星星数量。如果等级星星数量大于或等于16颗，您会在接下来的一个帐户年度保留在金星级会员等级。请见以下示例：</p>
<ul>
	<li>2019年3月10日，小赵晋升为玉星级会员；</li>
	<li>2019年7月19日，小赵成功累积16颗等级星星，晋升为金星级会员；</li>
	<li>2020年年3月10日，星巴克会检查小赵帐户在前一个帐户年度中所累积的等级星星数量。如果所累积的等级星星数量大于或等于16颗，那么小赵可以在2020年3月10日至2021年3月9日期间继续保留在金星级会员等级；但如果所累积的等级星星数量小于16颗，那么小赵会在2020年3月10日当日被降至玉星级。2020年3月10日当天，小赵帐户内所累积的所有等级星星也被同时清零。</li>
</ul>
<p>2.9   什么是金星级会员专属电子星礼卡？我该如何使用？</p>
<p class="p-container">在星享俱乐部会员首次成为金星级会员时，一张金星级专属电子星礼卡会在您晋升为金星级会员后的24小时内自动绑定至您的星享俱乐部帐户，并作为您帐户内的默认星礼卡。金星级专属电子星礼卡是一种可充值的预付费卡。该卡完成充值后，您在中国大陆地区的指定星巴克门店消费时，可以使用星礼卡付款（您可以查阅 <font>《星礼卡常见问题 》</font>以了解使用星礼卡的更多详情）。</p>
<p>2.10   哪里可以兑换我星享俱乐部帐户中的好礼？</p>
<p class="p-container">光顾中国大陆地区任何一家参加星享俱乐部活动的星巴克门店时，您可以在星巴克App登录您的星享俱乐部帐户，点击帐户首页“我的二维码”后，向店内咖啡师出示页面上所呈现的动态二维码、或者出示您星享俱乐部帐户中的星享卡活跃卡，当POS机具成功读取动态二维码或星享卡活跃卡时，您即可兑换使用帐户中的会员好礼电子券。此外，您也可以通过合作伙伴的渠道登录星享俱乐部帐户，当店内咖啡师通过该渠道指定的方式得以识别您的会员身份后，您即可兑换使用帐户中的会员好礼电子券。</p>
<p class="p-container">请您注意，不同好礼的适用渠道和门店范围可能有所不同，详见好礼使用规则。</p>
<p class="p-container">请您留意您星享俱乐部帐户中好礼的使用期限，并在使用期限内使用好礼。如有疑问请致电我们的客服热线400-820-6998寻求帮助。</p>
<p class="p-container">为保护星享俱乐部帐户的安全，星巴克门店不接受本常见问题解答中没有规定的其他方式使用星享俱乐部帐户及/或星享卡（包括但不限于：对实体星享卡上的条形码、二维码等进行拍摄或扫描获得的照片，以及通过第三方软件呈现或生成于第三方软件的条形码、二维码等）。</p>
<p>2.11   玉星级会员如何获得玉星晋级饮品券？</p>
<p class="p-container">为庆祝您晋级，当您从银星级升至玉星级时，星巴克会在24小时内将一张免费的玉星晋级饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加至您的星享俱乐部帐户后的次日起生效，有效期为7天。在您的帐户存续期间，您只能获得一次玉星晋级饮品券。</p>
<p>2.12   玉星级/金星级会员如何获得生日饮品券？</p>
<p class="p-container">为庆祝您的生日，在您成为玉星级会员后的每个帐户周年复审日，如果您的星享俱乐部帐户在上一个帐户年度内通过购买累积满了1颗等级星星（不包括奖励星星），且您在星享俱乐部帐户中已填写了您的生日信息，那么星巴克会在该帐户周年复审日，将一张免费的生日饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在您的下一个生日当天生效，有效期为7天。在一个帐户年度内，您只能获得一次生日饮品券。</p>
<p>2.13   玉星级会员如何获得金星在望饮品券？</p>
<p class="p-container">在您从银星级会员首次升级成为玉星级会员之后，当您的星享俱乐部帐户中首次累积满了8颗等级星星时，星巴克会在24小时内将一张免费的金星在望饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加至您的星享俱乐部帐户后的次日起生效，有效期为7天。</p>
<p>2.14   金星级会员如何获得金星晋级饮品券？</p>
<p class="p-container">为庆祝您晋级，当您每次从玉星级会员升级成为金星级会员时，我们均会在24小时内将一张免费的金星晋级饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加至您的星享俱乐部帐户后的次日起生效，有效期为7天。在一个帐户年度内，您只能获赠一次金星晋级饮品券。</p>
<p>2.15   金星级会员如何获得周年庆邀请券？</p>
<p class="p-container">为庆祝您的帐户周年日，如果您在某一帐户周年复审日之前的帐户年度内累积满了16颗等级星星，我们会在该帐户周年复审日将一张免费的周年庆饮品券（采用电子券的形式）添加到您的星享俱乐部帐户中。此电子券将在添加到您的星享俱乐部帐户中后的下一个帐户周年复审日生效，有效期为7天。</p>
<p>2.16   与饮品相关的会员好礼是否可用于兑换星巴克门店内的所有饮品？</p>
<p class="p-container">星享俱乐部会员好礼及其他活动受 <font>www.starbucks.com.cn</font>网站所示的完整版本的<font>《星享俱乐部活动的条款和条件》</font>的约束。星享俱乐部帐户中赠送的所有会员好礼不能在不可使用会员好礼的门店中使用（点击查看<font>《不可使用星享俱乐部会员好礼的门店列表》</font>），也不能用于兑换特定的星巴克饮品（点击查看<font>《不适用星享俱乐部好礼的特定饮品列表》</font>）。</p>
<p>2.17   金星级会员如何使用好礼星星？</p>
<p class="p-container">您可通过参加星享俱乐部活动的星巴克门店、星巴克App内啡快服务，使用您会员帐户内的基础好礼星星和奖励好礼星星兑换星巴克指定饮品或食品；您也可以在星巴克App内使用您会员帐户内的基础好礼星星和奖励好礼星星兑换金星会员专享优惠券。星巴克将不时更新可用基础好礼星星和奖励好礼星星兑换的指定产品和指定权益，具体请详见《好礼星星兑换规则》。</p>
<p class="p-container">除<span>《好礼星星兑换规则》</span>规定产品外，星巴克还会不时推出星星兑换的短期促销活动，请随时关注星巴克App和合作伙伴App内相关活动详情。</p>
<p class="p-container">完成兑换后，兑换所需的相应数量的基础好礼星星和/或奖励好礼星星将从您的星享俱乐部帐户中被清除。请注意，我们将优先清除您帐户中在先到期的基础好礼星星和/或奖励好礼星星。</p>
<p>2.18   金星级会员可以使用好礼星星兑换星巴克门店内的所有产品吗？</p>
<p class="p-container">不是，有部分商品不参与好礼星星兑换，具体参与兑换的商品说明请参见<span>《好礼星星兑换规则》</span>中的规定。</p>
<p class="p-container">好礼星星无法直接兑换星杯类商品/咖啡调制器具类商品/咖啡豆/星巴克VIA免煮咖啡饮品/星巴克ORIGAMI便携式滴滤，但会员可以前往星巴克中国App使用好礼星星兑换相关产品优惠券，具体兑换规则请参考星巴克中国App。</p>
<p>2.19   使用好礼星星兑换优惠券后，是否可以取消兑换？</p>
<p class="p-container">可以。好礼星星兑换优惠券后，如果优惠券尚在有效期内且未使用，会员可以在星星记录中找到相关兑换记录并通过点击“取消兑换”按钮申请取消兑换，取消成功后，星星将在24小时内退回您的会员帐户。如取消兑换时，您已不是金星级会员，或您当时用于兑换的部分/全部好礼星星已过期，则无法获得返还的部分/全部好礼星星。</p>
<p>2.20   是不是星巴克所有的服务渠道都可以使用好礼星星？</p>
<p class="p-container">不是，目前你只能在星巴克门店和星巴克App内啡快服务使用好礼星星。今后，我们会推出更多可以兑换星星的服务渠道，敬请期待！</p>
<p>2.21   如何查询我的会员等级、星星数量以及星享俱乐部帐户中的电子好礼券数量？</p>
<p class="p-container">您可以访问www.starbucks.com.cn/account网站或在星巴克App上，登录您的星享俱乐部帐户后，您就可以查询您的星星数量、会员等级、电子好礼券数量等信息。</p>
<p class="p-container">如您的星享俱乐部帐户已与您在星巴克指定的合作伙伴渠道上已建立的账户（或账号）绑定，您也可以登录合作伙伴的渠道，进入相关页面查询您星享俱乐部帐户的星星数量、会员等级、电子好礼券数量等信息。</p>
						</div>
					</div>
				</div>
				
				<div class="card">
					<div class="card-header" id="headingThree">
						<h2 class="mb-0">
							<button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								<img src="@/assets/img/main/club/question3.svg"> <span>会员服务</span>
							</button>
						</h2>
					</div>
					<div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
						<div class="card-body">
<p>3.1   在验证我的星享俱乐部帐户时，我发现我的手机号对应多个并非我本人创建的帐户。这是为什么？这是否意味着我的帐户不安全？</p>

<p class="p-container">在发生上述情况时，这说明您所使用的手机号码曾被其他用户用来注册过星享俱乐部帐户。通常来说，以上情况并不会影响您注册新的星享俱乐部帐户。同时，请您放心，登录任一星享俱乐部帐户时都需要输入帐户密码。如您在注册或登录星享俱乐部帐户过程中有任何疑问，请致电我们的服务热线400-820-6998。</p>

<p>3.2   为什么我通过星巴克App登录我的星享俱乐部帐户之后，却看不到我帐户中的动态二维码？</p>

<p class="p-container">请检查您的手机是否已接入移动或无线局域网络。当您的手机尚未接入移动或无线局域网络时，星巴克App是无法呈现您星享俱乐部帐户中的动态二维码的。</p>

<p>3.3   我能否通过多个设备同时登录我的同一个星享俱乐部帐户？</p>

<p class="p-container">为保护星享俱乐部帐户的安全，星巴克App不支持您通过多个设备同时登录并使用同一个星享俱乐部帐户。</p>

<p>3.4   如何保护我的星享俱乐部帐户内已绑定的星礼卡资金及会员好礼不被人盗用？</p>

<p class="p-container">请保护好您的星享俱乐部帐户密码并及时更新帐户密码。我们还强烈建议您在星巴克App中为您的星享俱乐部帐户设置并开启口令密码。同时，请您妥善保管好您的实体星享卡或星礼卡。</p>

<p>3.5   如果我帐户中的消费记录、星星数量以及会员等级等信息不准确或不清楚，我该如处理？</p>

<p class="p-container">如果您有这些方面的疑问，请致电我们的服务热线400-820-6998。</p>

<p>3.6   如果已经被绑定在星享俱乐部帐户中的星礼卡的实体卡片丢失了，我该怎么办？</p>

<p class="p-container">在星礼卡的实体卡片发生遗失或者被盗后，您可以访问www.starbucks.com.cn/account网站，申请冻结并转移该遗失或者被盗星礼卡的卡内余额（以下简称“余额保护”）。由于我们需要一定的时间处理您的申请，您的余额保护申请并非即时生效。一旦余额保护申请被批准，我们将为您在您的星享俱乐部帐户中免费生成并绑定一张电子星礼卡并将被申请保护的原实体星礼卡卡内余额全部转移到该电子星礼卡中，同时，该遗失或者被盗的实体星礼卡的卡片无法继续使用。新生成并绑定的该电子星礼卡的有效期与被申请保护的原实体星礼卡的有效期相同。因原实体星礼卡被盗或遗失而可能造成的卡内资金的损失风险由您自行承担。</p>

<p>3.7   我还有关于星享俱乐部的其他问题，该如何解决？</p>

<p class="p-container">请致电我们的服务热线400-820-6998。</p>
						</div>
					</div>
				</div>

			</div>
		</club>

		<div class="container footer" :style="{backgroundImage: 'url(' + $host + footer + ')'}">
			<div class="row">
				<div class="col-sm">
					<p>详情以《星享俱乐部活动的条款和条件》的规定为准</p>
					<p>© 2020 Starbucks Corporation. All rights reserved.</p>
 					<img src="@/assets/img/icpicon.png">沪公网安备 31010402000253号 沪ICP备17003747号
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
import {request} from '@/network/request'
import club from '@/components/main/club'
export default {
	data () {
		return {
			// rewards: [],
			// upgrade: [],
			// stars: [],
			// channel: [],
			// join: [],
			// footer:[],
		}
	},
	components: {
		club,
	},
	mounted() {
		// 数据请求
		// request({
		// 	url:'/data.json',
		// }).then(res => {
		// 	this.rewards = res.data.rewards
		// 	this.upgrade = res.data.upgrade
		// 	this.stars = res.data.stars
		// 	this.channel = res.data.channel
		// 	this.join = res.data.join
		// 	this.footer = res.data.footer
		// }).catch(err => {
		// 	console.log(err);
		// })
	}
}

</script>
<style scoped>
/* 默认样式 */
.container-fuild {
	margin: 0 auto;
	padding-top: 30px;
	text-align: center;
	font-family: "Gotham", Helvetica, Arial, PingFangSC-Regular, "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
.container-fuild > .row {
	margin-top: 30px;
	width: 100%;
	margin-left:0px;
}
.treaty {
	padding: 25px 0px 5px 0px;
	font-size: 12px;
}
.treaty > span {
	color: #00A862;
}
/* 星享俱乐部 */
	.rewards {
		background: #023529;
		color: white;
	}
	.rewards::before {
		content: '';
		position: relative;
		top: 14px;
		left: 48.5%;
		width: 2px;
		border-width: 15px;
		border-style: solid;
		border-color: #14767c transparent transparent transparent;
	}
	/* 积分升级 */
	.upgrade {
		background: #EBF3F5;
		color: black;
	}
	.upgrade p {
		font-size: 16px !important;
		padding: 0 !important;
	}
	.upgrade .row p span{
		font-weight: 700;
	}
	/* 等级会员权益 */
	ul > li {
		list-style: none;
		padding: 5px 0px;
		font-size: 15px;
	}
	.stars .row > div > div {
		width: 30px;
		height: 3px;
		margin: 0 auto;
		margin-top: 20px;
		margin-bottom: 10px;
		border-radius: 10px;
		background: #C2A661;
	}
	/* 会员星礼包 */
	.giftbag > div {
		text-align: left;
	}
	.giftbag > div > div  > img {
		display: inline-block;
		transform: translateY(20%);
		vertical-align: middle;
	}
	.giftbag > div > div > h6 {
		font-weight: 700;
	}
	.giftbag > div > div > p {
		font-size: 12px;
	}
	/* 多种获得星星的图片 */
	.channel {
		background: #023529;
		color: white;
	}
	.channel > div > img {
		margin-top: 5px;
	}
	.channel > div > div > div img {
		margin: 10px 0px 5px 0px;
	}
	.channel > div > div p:last-child {
		margin-bottom: 30px;
	}
	/* 注册加入我们 */
	.join {
		background: rgb(235,243,245);
	}
	.join  div p {
		font-size: 16px !important;
		color: black;
	}
	.join  div div button {
		background: #15767C;
		border-radius: 48px;
		outline: none;
		border: none;
    color: #FFFFFF;
		font-size: 14px;
		margin: 20px 0px 0px 0px;
    padding: 0 22px;
	}
	.join  div div button > a{
		color: white;
	}
	.join div > div {
		margin-bottom: 25px;
	}
	.join .row > div:first-child {
		border-right: 2px solid black;
	}
	/* 常见问题 */
	.question .accordion {
		width: 100%;
	}
	.question .accordion > div > div img {
		width: 5%;
		margin-right: 5%;
		font-size: 20px;
	}
	.question .accordion > div > div > h2 span {
		font-size: 20px;
		color: black;
		text-decoration: none;
	}
	.btn-link:focus, .btn-link.focus {
    text-decoration: none;
	}
	.btn:focus, .btn.focus {
			outline: 0;
			box-shadow: none;
	}
	.card-body {
		text-align: left;
	}
	.card-body p {
		font-size: 16px;
	}
	.card-body > .p-container {
		padding: 2%;
	}
	.card-body > ul {
		padding: 0px 50px;
	}
	.card-body > ul > li {
		list-style: disc;
	}
	.card-body > p > span {
		font-weight: 700;
	}
	.card-body > p > font {
		color: #00A862;
	}

	/* 底部 */
	.footer {
		text-align: center;
		color: white;
		height: 200px;
		font-size: 14px;
		background-size: 100%;
		background-position: center center;
	}
	.footer > .row > div {
		margin-top: 5%;
	}
</style>