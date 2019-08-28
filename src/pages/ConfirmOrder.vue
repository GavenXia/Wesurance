<template>
  <div class="page-wrap">
    <div class="imgs">
            <img class="img" src="@/assets/images/9.png" alt="">
    </div>
    <!-- <div class="plan-item">
      <p class="plan">Your plan</p>
      <p class="travelead">TraveLead(Essential)</p>
    </div>

    <div class="pre-item">
      <p class="premium">Premium</p>
      <p class="price">HK$190.00</p>
    </div>

    <div class="date">
      <span>
        <p class="date-title">Policy is effective from</p>
        <p class="date-date">2019-05-04</p>
      </span>
      <span>
        <p  class="date-title">End date</p>
        <p class="date-date">2019-05-08</p>
      </span>
      <span class="edit">
        Edit
      </span>
    </div> -->
<!-- 调用组件 -->
<!-- <WOrder></WOrder> -->

    <div class="button-bar">
      <router-link to="/Payment">
        <button class="proceed">Confirm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
// import WOrder from'components/WOrder.vue'
export default {
  // components:{
  //   WOrder
  // },
  data() {
    return {};
  },
  created() {
    const toast = this.$createToast({
      time: 1000,
      txt: "loading..."
    });
    toast.show();
  }
};
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
// .plan-item{
//   line-height: 40px;
//   .plan{
//     color:rgb(221, 219, 219) ;
    
//   }
//   .travelead{
//     font-family: PingFangHK-Regular;    
//     font-size: 36px;
//   }
// }
// .pre-item{
//   line-height: 40px;
//   margin-top: 40px;
//   .premium{
//     color:rgb(221, 219, 219) ;    
//     font-family: PingFangHK-Regular;
//   }
//   .price{
//     color: @blue;
//     font-weight: bold;
//     font-size: 42px;
//   }
// }
// .date{
//   display: flex;
//   justify-content: space-between;
//   margin-top: 100px;
//   line-height: 45px;
//   span{
//     .date-title{
//     color:rgb(221, 219, 219) ;
//     font-family: PingFangHK-Regular;
//     }
//     .date-date{
//       font-size: 30px;
//     }
//   }
//   .edit{
//     color: @blue;
//   }
// }

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