<template>
    <div class="page-wrap">
        <!-- <div class="imgs">
            <img class="img" src="@/assets/images/5.png" alt="">
        </div> -->
         
         <div></div>
         <div class="imgs">
           <span class="wes">
             <img src="@/assets/images/wesuranse 3-01@3x.png" alt="">
           </span>  
           <span class="dev">
             <img src="@/assets/images/Developer@3x.png" alt="">
            </span>
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

  // created() {
  //   this.countDown();
  // },

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
     display: flex;
     justify-content: space-between;
     .wes{
      display: inline-block;
      width: 200px;
      height: 200px;
     
      text-align: center;
      border-radius: 50%;
      box-shadow: 0px 8px 40px 0 rgba(0, 0, 0, 0.14);
      img{
        width: 90%;
        height: 90%;
        margin-top: 13px;
      }
     }
     .dev{
      display: inline-block;
      width: 200px;
      height: 200px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0px 8px 40px 0 rgba(0, 0, 0, 0.14);

      img{
        width: 60%;
        height: 60%;
        margin-top: 30px;

      }
      }
     }
    //  .imgs{
    //     width: 100%;
    //  }
    //  .img{
    //      width: 100%;
    //      height: 100%;
    //  }

 }
</style>