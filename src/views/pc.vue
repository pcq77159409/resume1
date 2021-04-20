<template>
  <div class="pc-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="https://en.cnkh.com/"
            ><img src="@/assets/img/kh.png" alt=""
          /></a>
        </div>
        <div class="swiper-slide">
          <a href="http://zhenglimobile.test.yscase.com"
            ><img src="@/assets/img/zl.png" alt=""
          /></a>
        </div>
        <div class="swiper-slide"><a href="http://ktv.mozeren.top/"
            ><img src="@/assets/img/ktv.png" alt=""
          /></a></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      mySwiper: null,
    };
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    });
  },
  methods: {
    initSwiper() {
      setTimeout(() => {
        this.mySwiper = new Swiper(".swiper-container", {
          loopAdditionalSlides: 3,
          loop: true,
          speed: 500,
          autoplay: 3000,
          autoplayDisableOnInteraction: false,
          pagination:  ".swiper-pagination",
          observer: true, // 启动动态检查器(OB/观众/观看者)
          observeParents: true, // 修改swiper的父元素时，自动初始化swiper
          
        });
      }, 300);
    },
  },
};
</script>
<style scoped src="@/assets/css/pc.css">
</style>
