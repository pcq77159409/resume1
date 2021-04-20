<template>
  <div class="m-box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><a href="http://mogujie321.h5.yscase.com/v1/"
            ><img src="@/assets/img/mgj1.png" alt=""
          /><img src="@/assets/img/mgj2.png" alt=""
          /><img src="@/assets/img/mgj3.png" alt=""
          /></a></div>
        <div class="swiper-slide"><a href="http://taikooli-fashion-knowledge.test.yscase.com/#/greet"
            ><img src="@/assets/img/tgl1.png" alt=""
          /><img src="@/assets/img/tgl2.png" alt=""
          /><img src="@/assets/img/tgl3.png" alt=""
          /></a></div>
        <div class="swiper-slide"><a href="https://juvederm-rank.h5.yscase.com/"
            ><img src="@/assets/img/qyd1.png" alt=""
          />
          <img src="@/assets/img/qyd2.png" alt=""
          />
          <img src="@/assets/img/qyd3.png" alt=""
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
      mySwiper:null
    };
  },
  created() {},
  mounted() {
   this.$nextTick(() => {
        this.initSwiper()
      })
  },
  methods: {
    initSwiper () {
        setTimeout(()=>{
          this.mySwiper=new Swiper('.swiper-container', {
            loopAdditionalSlides: 3,
            loop: true,
            speed: 500,
            autoplay: 3000,
            autoplayDisableOnInteraction:false,
            pagination:'.swiper-pagination',
            observer: true, // 启动动态检查器(OB/观众/观看者)
            observeParents: true // 修改swiper的父元素时，自动初始化swiper
          });
        },300)
      }
  },
};
</script>
<style scoped src="@/assets/css/m.css">
</style>
<style scoped>


.swiper-container {
    width: 100%;
    height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-container {
    --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
    --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px; /* 设置按钮大小 */
  }
</style>