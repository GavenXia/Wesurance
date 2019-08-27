<template>
    <div class="page-wrap">
        <div class="imgs">
            <img class="img" src="@/assets/images/9.png" alt="">
        </div>
       <div class="button-bar" >
            <router-link to="/Payment">
            <button class="proceed">
              Confirm
            </button>
            </router-link>
         </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
      const toast = this.$createToast({
        time: 1000,
        txt: 'loading...'
      })
      toast.show()
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