<template>
  <div class="page-wrap">
    <!-- <div class="imgs">
            <img class="img" src="@/assets/images/10.png" alt="">
    </div>-->
    <div class="travelead">TraveLead(Essential)</div>
    <div class="date">
      <span>
        <p class="date-title">Departure Date</p>
        <p class="date-date">2019-05-04</p>
      </span>
      <span>
        <p class="date-title">End Date</p>
        <p class="date-date">2019-05-08</p>
      </span>
    </div>

    <div class="customer">
      <span>
        <p class="days">5days</p>
        <p>Andy Cheng</p>
        <p>Amy Kwok</p>
        <p>Adrian Cheng</p>
        <p>Wendy Lee</p>
      </span>
      <span class="customer-type">
        <p style="color:transparent;">a</p>
        <p>(me)</p>
        <p>(adult)</p>
        <p>(child)</p>
        <p>(adult)</p>
      </span>
    </div>

    <div class="subtotalPrice">
      <span>
        <p class="subTotal">SubTotal</p>
        <p>
          Levy
          <span class="collection">（Know more about IA Levy collection）</span>
        </p>
      </span>
      <span class="price">
        <p>HK$190.00</p>
        <p>HK$0.11</p>
      </span>
    </div>

    <div class="total-item">
      <span class="total">Total</span>
      <span class="totalprice">HK$190.11</span>
    </div>

    <!-- 单选 -->
    <div class="radio">
      <span @click="clickRadio" :class="{'checked':true, 'selected':checked}"></span>
      <p class="agreed">Please confirm you have read and agreed with the <span class="declaration"> Declaration</span> and <span class="declaration">Personal Information Collection Statement.</span></p>
    </div>

    <p class="payment-method">Payment Method</p>

    <div class="button-bar">
      <router-link to="/Pay">
        <button class="proceed">Checkout</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count:{
        confirm:0
      },
      checked:false //默认是选中的？
    };
  },
  created() {
    const toast = this.$createToast({
      time: 1000,
      txt: "loading..."
    });
    toast.show();
  },
  methods:{
    clickRadio(){
        this.checked=!this.checked
    }
  }
};
</script>

<style lang="less" scoped>
@import "~style/mixin.less";
* {
  touch-action: pan-y;
}
.page-wrap {
  padding: 34px;
  //  .imgs{
  //     width: 100%;
  //  }
  //  .img{
  //      width: 100%;
  //      height: 100%;
  //  }

  .travelead {
    text-align: center;
    color: @blue;
    // font-family: PingFangHK-Regular;
    font-size: 35px;
  }
  .date {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgb(209, 208, 208);
    border-bottom: 1px solid rgb(209, 208, 208);
    line-height: 60px;
    padding-left: 100px;
    padding-right: 100px;
    margin-top: 50px;
    span {
      .date-title {
        color: rgb(74, 74, 74);
      }
      .date-date {
        font-size: 30px;
        color: rgb(155, 155, 155);
      }
    }
  }
  .customer {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    padding-left: 100px;
    padding-right: 100px;
    text-align: center;
    font-size: 26px;
    span {
      .days {
        color: rgb(74, 74, 74);
      }
    }
    .customer-type {
      color: rgb(155, 155, 155);
    }
  }
  .subtotalPrice {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #9fbcd1;
    border-bottom: 1px solid #9fbcd1;
    line-height: 50px;
    padding-top: 50px;
    padding-bottom: 15px;
    span {
      .subTotal {
        color: rgb(74, 74, 74);
        font-size: 29px;
        font-family: HelveticaNeue-Medium;
        letter-spacing: 0.05px;
      }
      p {
        .collection {
          color: @blue;
        }
      }
    }
    .price {
      text-align: right;
      color: rgb(24, 95, 146);
      font-size: 29px;
    }
  }
  .total-item {
    display: flex;
    justify-content: space-between;
    padding-top: 30px;
    padding-bottom: 30px;

    .total {
      color: rgb(74, 74, 74);
      font-size: 29px;
      font-family: HelveticaNeue-Medium;
      letter-spacing: 0.05px;
    }
    .totalprice {
      color: rgb(24, 95, 146);
      font-size: 29px;
    }
  }
  
  .radio {
    display: flex;
    border-bottom:1px solid #9fbcd1;
    padding-bottom: 250px;
    span {
      
      &.checked {
        display: inline-block;
        width: 50px;
        box-sizing: border-box;
        height: 50px;
        border: 1px solid #888;
        background: none;
        border-radius: 50%;
       // background: url("../assets/images/TickOff@3x.png") no-repeat center center/44px 44px;
          
      }
       &.selected {
              border: none;
              border-radius: 0;
              background: url('../assets/images/Tick@3x.png') no-repeat center center/50px 50px;
            }
    }
    .agreed{
      flex:1;
      margin-left: 40px;
      color: @gray;
      line-height: 28px;
      font-size: 20px;
      // text-align: justify; 
      .declaration{
        text-decoration: underline;
        color: @blue;
      }
    }
  }
  .payment-method{
    font-size: 30px;
    color: rgb(74, 74, 74);
    font-family: HelveticaNeue-Medium;
    margin-top: 25px;
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