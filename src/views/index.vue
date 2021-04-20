<template>
  <div class="box">
    <div class="head">
      <img src="~@/assets/img/bj1.jpg" alt="" class="h-img" />
      <div class="head-portrait">
        <img src="~@/assets/img/tx.jpg" alt="" />
      </div>
      <p>彭超群</p>
      <div class="purpose">求职意向: web前端工程师</div>
    </div>
    <div class="body">
      <div class="b-am">
        <h3>关于我</h3>
        <div class="about-me">
          <div class="title">
            <span class="iconfont">&#xe601;</span>
            个人信息
          </div>
          <p>姓名: 彭超群</p>
          <p>年龄: 22</p>
          <p>性别: 男</p>
          <p>住址: 湖南邵阳</p>
          <p>电话: 151-9791-1446</p>
          <p>邮箱: 2308135799@qq.com</p>
        </div>
      </div>
      <div class="b-skill">
        <h3>技能</h3>
        <div class="skill">
          <ul>
            <li><span>HTML CSS :</span> <i></i></li>
            <li><span>Bootstrap :</span> <i></i></li>
            <li><span>JavaScript :</span> <i></i></li>
            <li><span>JQuery :</span> <i></i></li>
            <li><span>Less :</span> <i></i></li>
            <li><span>VUE :</span> <i></i></li>
            <li><span>WebPack :</span> <i></i></li>
            <li><span>Node :</span> <i></i></li>
            <li><span>Git :</span> <i></i></li>
            <li><span>小程序 :</span> <i></i></li>
          </ul>
        </div>
      </div>
      <div class="b-experience">
        <h3>项目经历</h3>
        <div class="experience">
          <p>2020年 - 2021年期间的项目</p>
          <router-link
            to="/index/pc"
            :class="{ active: tab == true }"
            @click.native="tab = true"
          >
            pc端
          </router-link>
          <router-link
            to="/index/m"
            ref="tab-m"
            :class="{ active: tab == false }"
            @click.native="tab = false"
            >移动端</router-link
          >
          <div class="tab">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="b-summarize">
        <h3>个人总结</h3>
        <div class="summarize">
          <ul>
            <li>1年的工作经历 可独立完成项目</li>
            <li>掌握 Git 可与同事合作完成多人项目</li>
            <li>有责任心和团队合作精神 人帅脾气好</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: true,
    };
  },
  created() {
    if (this.$route.matched[1].path == "/index/m") {
      this.tab = false;
    } else {
      this.tab = true;
    }
  },
  methods: {},
};
</script>
<style lang="less">
@font-face {
  font-family: "iconfont";
  src: url("~@/assets/font/iconfont.eot");
  src: url("~@/assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("~@/assets/font/iconfont.woff2") format("woff2"),
    url("~@/assets/font/iconfont.woff") format("woff"),
    url("~@/assets/font/iconfont.ttf") format("truetype"),
    url("~@/assets/font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped src="@/assets/css/index.css"></style>