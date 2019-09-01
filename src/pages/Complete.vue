<template>
  <div class="page-wrap">
    <div class="imgs">
            <img class="img" src="@/assets/images/12.png" alt="">
    </div>
    <!-- <div class="finish-item">
      <p class="done-img">
        <img src="@/assets/images/done@3x.png" alt />
      </p>
      <p>Purchase Complete</p>
    </div>

    <div class="email-item">
      <span class="email-img">
        <img src="@/assets/images/Email@3x.png" alt />
      </span>
      <span class="email-info">
        <p>Thank you! Insurer has already emailed you the policy!</p>
        <p>GoLion will send you the Acknowlegement email, we recommend you to download our App for more features!</p>
      </span>
    </div>

    <div class="finish-bottom">
     I acknowledge and agree that Insurer shall use the Personal data I have provided for the purposes of providing insurance services in accordance with Insurer's Privacy Policy. 
    </div> -->

    <div class="button-bar">
      <button class="proceed">Finish</button>
    </div>
  </div>
</template>

<script>
export default {
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
  .finish-item {
    text-align: center;
    margin-top: 200px;
    .done-img {
      width: 170px;
      height: 170px;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p {
      color: @blue;
      font-size: 50px;
      margin-top: 30px;
    }
  }
  .email-item{
    display: flex;
    justify-content: space-around;
    margin-top: 200px;
    .email-img{
      width: 120px;
      height: 120px;
      margin-left: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .email-info{
      flex: 1;
      margin-left: 30px;
      line-height: 30px;
      color: rgb(0,129,255);
      letter-spacing: 1px;
    }
  }
  .finish-bottom{
    color: rgb(209, 207, 207);
    text-align: center;
    line-height: 30px;
    padding-top: 300px;
    padding-bottom: 70px;
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