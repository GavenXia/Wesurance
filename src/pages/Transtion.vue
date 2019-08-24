<template>
    <div class="page-wrap">
        <div class="imgs">
            <img class="img" src="@/assets/images/5.png" alt="">
        </div>
       <div class="button-bar" >
            <router-link to="/Prompt">
            <button class="proceed">
              Proceed
            </button>
            </router-link>
         </div>
    </div>
</template>

<script>
export default {
  data () {
      return{
          count:3,//倒计时
          timer: null
      }
  },

  created() {
    this.countDown();
  },

  methods: {
    countDown() {
      if(!this.timer) {
        this.timer = setInterval(() => {
          if(this.count > 0) {
            this.count = this.count -1
          } else {
            clearInterval(this.timer);
            this.timer = null;
            //跳转的页面写在此处
            this.$router.push({
              path: '/Prompt'
            });
          }
        }, 1000);
      }
    }
  },

  beforeDestroy () {
    if(this.timer) { 
        clearInterval(this.timer);
        this.timer = null;
    }
  }
  
}
 
</script>

<style lang="less" scoped>
  @import '~style/mixin.less';
 .page-wrap{
     padding: 34px;
     .imgs{
        width: 100%;
     }
     .img{
         width: 100%;
         height: 100%;
     }
     .button-bar {
   margin: 0 auto;
   text-align: center;
   margin-top: 54px;
   margin-bottom: 102px;
 }
 .proceed{
   width: 388px;
   height: 130px;
   line-height: 130px;
   border: none;
   border-radius: 10px;
   background:rgb(2, 164, 71);
   color:#fff;
   text-align: center;
   font-size:36px;
 }
 }
</style>