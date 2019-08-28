<template>
  <div class="page-wrap">
    <div class="imgs">
            <img class="img" src="@/assets/images/7.png" alt="">
    </div>

    <!-- <WFormItem v-for="(item, index) in formData" :key="index"  :formdata="item" :formIndex="index"/> -->
    <div class="button-bar">
      <router-link to="/ConfirmMember">
        <button class="proceed">Confirm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// import WFormItem from 'components/WFormItem.vue' //此处是引入写好的组件

export default {
//  components:{
//    WFormItem //此处是引入的组件需要在此注册
//  },
 data() {
    return {
      formData: [ 
        // {
        //   title:'lxy'
        // },
        {
          title: 'Myself'
        }
      ]
    }
  },
  created(){
    const toast = this.$createToast({
      time: 1000,
      txt: "loading..."
    });
    toast.show();
  }
}

  
  
</script>

<style lang="less" scoped>
@import "~style/mixin.less";
.page-wrap {
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
  .proceed {
    width: 388px;
    height: 130px;
    line-height: 130px;
    border: none;
    border-radius: 10px;
    background: rgb(2, 164, 71);
    color: #fff;
    text-align: center;
    font-size: 36px;
  }
}
</style>