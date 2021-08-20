<!--  -->
<template>
  <div style="">
    <div class="container-fluid beverages">
      <!-- 烘焙 -->
      <div>
        <h6>烘焙</h6>
        <div class="row">
          <div class="col-sm" v-for="item in bakery1">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in bakery2">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in bakery3">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in bakery4">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" :class="item.class" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <hr />
      </div>

      <!-- 蛋糕&甜品 -->
      <div>
        <h6>蛋糕&甜品</h6>
        <div class="row">
          <div class="col-sm" v-for="item in cakeDessert1">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in cakeDessert2">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" :class="item.class" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <hr />
      </div>

      <!-- 其他美食 -->
      <div>
        <h6>其他美食</h6>
        <div class="row">
          <div class="col-sm" v-for="item in package1">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in package2">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <hr />
      </div>

      <!-- 三明治、帕尼尼、卷 -->
      <div>
        <h6>三明治、帕尼尼、卷</h6>
        <div class="row">
          <div class="col-sm" v-for="item in sandwich1">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in sandwich2">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in sandwich3">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <div class="row">
          <div class="col-sm" v-for="item in sandwich4">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <hr />
      </div>

      <!-- 酸奶 -->
      <div>
        <h6>酸奶</h6>
        <div class="row">
          <div class="col-sm" v-for="item in yoghurt">
            <oneimgbox>
              <img :src="$host + item.imgUrl" slot="img" :class="item.class" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <hr />
      </div>

      <!-- 早安新一天 -->
      <div>
        <h6>早安新一天</h6>
        <div class="row">
          <div class="col-sm" v-for="item in nitroColdBrew">
            <oneimgbox>
              <img :src="item.imgUrl" slot="img" />
              <strong slot="text">{{ item.text }}</strong>
            </oneimgbox>
          </div>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import oneimgbox from "@/components/main/menu/oneimgbox";
import { request } from "@/network/request";

//引用 Bus 来进行兄弟组件中之间通信
import Bus from "@/utils/bus";
export default {
  data() {
    return {
      bakery1: [], //烘焙1
      bakery2: [], //烘焙2
      bakery3: [], //烘焙3
      bakery4: [], //烘焙4
      cakeDessert1: [], //蛋糕&甜品1
      cakeDessert2: [], //蛋糕&甜品2
      package1: [], //其他美食1
      package2: [], //其他美食2
      sandwich1: [], //三明治、帕尼尼、卷1
      sandwich2: [], //三明治、帕尼尼、卷2
      sandwich3: [], //三明治、帕尼尼、卷3
      sandwich4: [], //三明治、帕尼尼、卷4
      yoghurt: [], //酸奶
      text: "全部",
      istext: [
        "全部",
        "烘焙",
        "蛋糕&甜品",
        "其他美食",
        "三明治、帕尼尼、卷",
        "酸奶",
        "早安新一天",
      ],
    };
  },
  components: {
    oneimgbox,
  },
  mounted() {
    // 数据请求
    request({
      url: "/data.json",
    })
      .then((res) => {
        this.bakery1 = res.data.menu_food.bakery1;
        this.bakery2 = res.data.menu_food.bakery2;
        this.bakery3 = res.data.menu_food.bakery3;
        this.bakery4 = res.data.menu_food.bakery4;
        this.cakeDessert1 = res.data.menu_food.cakeDessert1;
        this.cakeDessert2 = res.data.menu_food.cakeDessert2;
        this.package1 = res.data.menu_food.package1;
        this.package2 = res.data.menu_food.package2;
        this.sandwich1 = res.data.menu_food.sandwich1;
        this.sandwich2 = res.data.menu_food.sandwich2;
        this.sandwich3 = res.data.menu_food.sandwich3;
        this.sandwich4 = res.data.menu_food.sandwich4;
        this.yoghurt = res.data.menu_food.yoghurt;
      })
      .catch((err) => {
        console.log(err);
      });

    // 使用 Bus 来接收 beverages 组件传过来的文本，在经过逻辑判断来进行渲染
    Bus.$on("texttitle", (texttitle) => {
      this.text = texttitle;

      for (let i = 0; i < this.istext.length; i++) {
        if (this.text == this.istext[i]) {
          if (i == 0) {
            $(".beverages > div").show();
          } else {
            $(".beverages > div").hide();
            $(".beverages > div")
              .eq(i - 1)
              .show();
          }
        }
      }
    });
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
hr {
  background: rgba(0, 0, 0, 0.12);
}
.container-fluid {
  background: rgb(247, 247, 247);
  text-align: center;
  margin: 0 auto;
}
.container-fluid > div > h6 {
  text-align: left;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.56);
  font-size: 14px;
  padding: 20px;
}
.container-fluid > div > .row {
  margin: 0 auto;
}
.container-fluid > div > .row > div {
  margin-left: 4%;
  margin-right: 4%;
}

@media screen and (max-width: 992px) {
  .container-fluid > .row > div {
    width: 40%;
  }
  .container-fluid {
    margin: 40px auto;
  }
}
@media screen and (max-width: 593px) {
  .container-fluid {
    margin: 160px auto;
  }
}
@media screen and (max-width: 576px) {
  .container-fluid .row > div {
    width: 15% !important;
  }
}
</style>
