<template>
  <div class="page-wrap">
    <p class="title">{{data.displayed_owned_by}}</p>

    <div class="headerimgs">
      <img class="headerimg" src="@/assets/images/CompanyLogo@3x.png" alt />
    </div>

    <p class="travelead">{{data.name}}</p>

    <p class="budget">{{data.desc1}}</p>

    <div class="travel-insurance">{{data.category_name}}</div>

    <!-- 价格 -->
    <div class="price">HK$190</div>

    <div>
      <img class="box" src="@/assets/images/starrTraveLeadEssential.png" alt />
    </div>

    <!-- 总天数和总人数 -->
    <!-- <div class="people">
      <span class="days">
        <span>{{days}}</span>Days
      </span>
      <span class="line">|</span>
      <span class="adults">
        <img class="adultsimg" src="@/assets/images/Adults@3x.png" alt />
      </span>
      <span class="adultsnum">3</span>
      <span class="friends">
        <img class="friendsimg" src="@/assets/images/friends Copy@3x.png" />
      </span>
      <span class="friendsnum">1</span>
      <span>
        <i class="cubeic-arrow"></i>
      </span>
    </div>-->

    <!-- Single Plan和Annual Plan -->
    <div class="buttons">
      <p class="quote-item">
        <button @click="quote" class="quote">Quote</button>
      </p>
      <p>
        <button class="single btn" @click="isChoose(1)" :class="{isActive:ischecked==1}">Single Plan</button>
        <button
          class="annual btn"
          @click="isChoose(-1)"
          :class="{isActive:ischecked==-1}"
        >Annual Plan</button>
      </p>
    </div>

    <div class="trip">A trip not exceeding 180 consecutive days.</div>

    <!-- Key Features -->
    <div>
      <p class="key">Key Features</p>
      <div class="key-content">
        <div>
          <!-- <p>'1. Medical Expenses up to HK$500,000, including in and outpatient treatments, No sublimit or restriction on outpatient expenses and number of visits</p> -->
          <p class="features">{{data.remarks}}</p>
          <!-- <p v-for="(item,index) in remarks" :key="index"> -->
          <!-- 2. No co-payment or deductible -->
          <!-- {{item}} -->
          <!-- <span v-if="index === 1 && flag" class="more" @click="clickmore">{{flag ? "更多" : "隐藏"}}</span> -->
          <!-- </p> -->
          <span
            v-if="remarks.length > 2 && !flag "
            class="more"
            @click="clickmore"
          >{{flag ? "更多" : "隐藏"}}</span>
        </div>
        <div v-show="more">
          <p>3. Cover amateur sports e.g. hot air ballooning, scuba diving, skiing, etc.</p>
        </div>
      </div>
    </div>

    <!-- Customer Service -->
    <div class="customers">
      <span class="starrs">
        <img class="starr" src="@/assets/images/Starr@3x.png" alt />
      </span>
      <span class="customer">Customer Service</span>
      <i class="cubeic-arrow"></i>
    </div>

    <!-- Coverage Details -->
    <div class="coverages" @click="coverage">
      <span class="covers">
        <img class="cover" src="@/assets/images/Confirmation of cover@3x.png" alt />
      </span>
      <span class="coverage">Coverage Details</span>
      <i class="cubeic-arrow"></i>
    </div>

    <div class="button-bar">
      <!-- <router-link to="/info"> -->
      <button class="proceed">Proceed</button>
      <!-- </router-link>            -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      travelInfo: {},
      more: false,
      data: "",
      flag: true,
      remarks: [],
      ischecked: 0,
      product_id:"5d15cdc2971f320d262b8266"
    };
  },
  computed: {
    // days() {
    //   return this.travelInfo.days ? this.travelInfo.days : 0;
    // }
  },
  methods: {
    clickmore() {
      this.more = !this.more;
    },
    isChoose(i) {
        console.log(i)
      if (i == 1) {
        if (this.isChecked == 1) {
          //改变原来的状态，就是为选中的状态，当点击的时候就取消掉选中的状态
          this.isChecked = 0;
        } else {
          this.isChecked = 1;
        }
      } else {
        if (this.isChecked == -1) {
          this.isChecked = 0;
        } else {
          this.isChecked = -1;
        }
      }
    },
    coverage(){
    //  var product_id = "5d15cdc2971f320d262b8266";

        this.$router.push({ path: '/CoverageDetails',query:{ product_id:this.product_id}})
    },
    quote() {}
  },
  created() {
    //   this.travelInfo = this.$route.query.travelInfo && JSON.parse(this.$route.query.travelInfo)
  },
  mounted() {
    var areacode = this.$route.query.phone_country_code;
    console.log(areacode);

    var product_id = "5d15cdc2971f320d262b8266";

    // var days=this.travelInfo.days
    // console.log(days)
    var params = {
      language: "tc",
      product_id: product_id,
      phone_country_code: areacode
    };
    this.$http.post("/wesupromo/tpc/getProductDetails", params).then(res => {
      this.data = res.data;
      console.log(res.data.remarks.indexOf(". "));
      //   debugger 找到突破了
      //   if(res.data.remarks.indexOf('↵') > -1) {
      //       console.log(res.data.remarks.split('↵'))
      //       this.remarks = res.data.remarks.split('↵').filter(item=>item)
      //   } else {
      //       this.remarks = res.data.remarks
      //   }
    });
  }
};
</script>

<style lang="less" scoped>
@import "~style/mixin.less";
.page-wrap {
  padding: 34px;
  .title {
    color: rgb(155, 155, 155);
    font-size: 9px;
    margin-bottom: 30px;
  }
  .travelead {
    color: #000;
    font-weight: 700;
    font-size: 44px;
    line-height: 52px;
    margin-bottom: 15px;
    margin-top: 32px;
  }
  .budget {
    color: #000;
    font-weight: 600;
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 10px;
  }
  .travel-insurance {
    color: rgb(142, 142, 147);
    font-size: 30px;
  }
  .headerimgs {
    width: 165px;
    height: 76px;
  }
  .headerimg {
    width: 100%;
    height: 100%;
  }
  .price {
    text-align: right;
    color: rgb(12, 129, 255);
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 35px;
  }
  .box {
    border-radius: 22px;
  }

  .cubeic-arrow {
    color: rgba(0, 0, 0, 0.25);
    font-size: 32px;
    font-weight: bold;
  }
  .buttons {
    line-height: 100px;
    .quote-item {
      display: flex;
      justify-content: flex-end;
      border-bottom: 1px solid rgb(209, 208, 208);
      margin-top: 25px;
      padding-bottom: 20px;
    }
  }
  .quote {
    background: rgb(239, 69, 95);
    width: 230px;
    height: 75px;
    border-radius: 15px;
    color: white;
    font-weight: 550;
    font-size: 35px;
    outline: none;
    border: none;
  }
  //   .single {
  //     background: rgb(224, 223, 223);
  //    touch-action: none;
  //     width: 260px;
  //     height: 65px;
  //     border-radius: 35px;
  //     color: white;
  //     font-weight: 550;
  //     font-size: 30px;
  //     outline: none;
  //     border: none;
  //   }
  .btn {
    background: rgb(224, 223, 223);
    touch-action: none;
    width: 260px;
    height: 65px;
    border-radius: 35px;
    color: rgb(177, 175, 175);
    font-weight: 550;
    font-size: 30px;
    outline: none;
    border: none;
    & .isActive {
      background: rgb(12, 129, 255);
     color: white;
    }
  }

  //   .annual {
  //     background: rgb(224, 223, 223);
  //     width: 260px;
  //     height: 65px;
  //     border-radius: 35px;
  //     color: rgb(177, 175, 175);
  //     font-weight: 550;
  //     font-size: 30px;
  //     outline: none;
  //     border: none;
  //     margin-left: 15px;
  //     touch-action: none;
  //   }
  .trip {
    color: rgb(12, 129, 255);
    font-weight: 500;
    border-bottom: 1px solid rgb(209, 208, 208);
    line-height: 65px;
  }
  .key {
    font-size: 34px;
    font-weight: 550;
    line-height: 100px;
  }
  .key-content {
    border-bottom: 1px solid rgb(209, 208, 208);
    padding-bottom: 15px;
    p {
      font-size: 30px;
      font-family: Arial, Helvetica, sans-serif;

      line-height: 45px;
      .more {
        color: rgb(12, 129, 255);
        // margin-left: 150px;
      }
    }
  }
.features{
    white-space: pre-line;
}
  .customers {
    line-height: 75px;
    border-bottom: 1px solid rgb(209, 208, 208);
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .starrs {
      display: inline-block;
      width: 65px;
      height: 65px;
      .starr {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        margin-left: 20px;
      }
    }
    .customer {
      font-size: 35px;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: -220px;
    }
  }
  .coverages {
    line-height: 75px;
    border-bottom: 1px solid rgb(209, 208, 208);
    padding-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .covers {
      display: inline-block;
      width: 65px;
      height: 65px;
      .cover {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        margin-left: 20px;
      }
    }
    .coverage {
      font-size: 35px;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: -220px;
    }
  }
  
  .button-bar {
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