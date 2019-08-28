<template>
  <div class="page-wrap">
    <div class="imgs">
            <img class="img" src="@/assets/images/6.png" alt="">
    </div>
    <!-- <div class="head-imgs">
      <img class="head-img" src="@/assets/images/CompanyLogo@3x.png" alt />
    </div>

    <div class="Starr">
      <div>
        Starr Companies (or STARR) is the worldwide marketing name of Starr International Company Inc. and C.V. Starr & CO., Inc.
        The history of STARR can be traced back to December 1919, when Cornelius Vander Starr founded an insurance agency in Shanghai, China. Throughout the 1920s,
        Starr established branches across China, and in Hong
        <span class="more" @click="clickmore">more</span>
      </div>
      <div v-show="more">
        Kong, Hanoi, Saigon, Jakarta, Kuala Lumpur and the Philippines. STARR is a leading international insurance
        and investment organization with operations in five continents. STARR provides Property, Liability, Accident & Health and a range of special insurance through its
        subsidiaries, including Travel Assistance, Aviation & Aerospace, Construction, Crisis Management, Energy, Environmental, Financial Lines, Marine, Professional
        Liability, Public Entity and Specialty Products. STARR also provides a wide range of insurance-related services, including claims, reinsurance, risk assessment and
        loss control.
        Starr International Insurance (Asia) Limited, a company of Starr International Company Inc. (Starr International) is a privately held global insurance company. Starr International's insurance entities provide high-quality, customized property and casualty insurance products, with significant access to the excess and surplus marketplace. These entities also provide risk management, claims management, administrative, and reinsurance services to their policyholders. And, it was licensed as a general insurance company in Hong Kong in September 2009 and received an “A” rating by A.M. Best Company since February 2010.
        Managed by a team of experienced insurance executives in the Asian insurance market, Starr International Insurance (Asia) Ltd. focuses on providing quality general insurance services to the Hong Kong market and serves as the base for Starr International's expansion into the Greater Asia region.
      </div>
    </div>

    <div class="individual">
      <p class="individual-item"><span class="individual-order">1.</span><span class="individual-content">An individual applicant must be 18 years old or above.</span></p>
      <p class="individual-item"><span class="individual-order">2.</span><span class="individual-content">For an insured person aged below 18 or above 70, the maximum sum insured of Accidental Death and Disablement shall be subject to 50% of the selected plan, or up to maximum of HK$500,000 whichever is lesser.</span></p>
      <p class="individual-item"><span class="individual-order">3.</span><span class="individual-content">For an insured person above 70, the maximum sum insured of Medical Expenses shall be subject to 50% of the selected plan.</span></p>
      <p class="individual-item"><span class="individual-order">4.</span><span class="individual-content">Personal money is not applicable to insured person aged 10 or below.</span></p>
      <p class="individual-item"><span class="individual-order">5.</span><span class="individual-content">The maximum trip duration for single trip and annual travel plan is 180 days and 90 days respectively.</span></p>
      <p class="individual-item"><span class="individual-order">6.</span><span class="individual-content">nsurance cover will automatically be extended up to a maximum of 7 days if the trip is delayed for any reasons outside the control of the insured person.</span></p>
      <p class="individual-item"><span class="individual-order">7.</span><span class="individual-content">Written notice (email: AsiaA&HClaims@Starrcompanies.com) of a claim must be given within 30 days after the incident.</span></p>
      <p class="individual-item"><span class="individual-order">8.</span><span class="individual-content">Any services under section 4 must be arranged by Starr Global Emergency Assistance.</span></p>
      <p class="individual-item"><span class="individual-order">9.</span><span class="individual-content">This page is designed to provide you a summary of the plan and is not a contract of insurance. All benefits and exclusions are only briefly outlined here. For complete details, please refer to the policy for terms and conditions.</span></p>
    </div> -->
    <div class="button-bar">
      <router-link to="/MemberData">
        <button class="proceed">Proceed</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      more: false
    };
  },
  created() {
    const toast = this.$createToast({
      time: 1000,
      txt: "loading..."
    });
    toast.show();
  },
  methods: {
    clickmore() {
      this.more = !this.more;
    }
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
  // .head-imgs {
  //   width: 400px;
  //   height: 200px;
  //   margin: 0 auto;
  //   .head-img {
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
  // .Starr {
  //   margin-top: 40px;
  //   border-bottom: 1px solid rgb(209, 208, 208);
  //   padding-bottom: 30px;
  //   div {
  //     font-size: 28px;
  //     color: rgb(74, 74, 74);
  //     line-height: 32px;
  //     .more {
  //       color:@blue;
  //     }
  //   }
  // }
  // .individual{
  //   margin-top: 30px;
  //   padding-left:18px; 
  //   border-bottom: 1px solid rgb(209, 208, 208);
  //   padding-bottom: 30px;
  //   p{
  //      font-size: 28px;
  //     color: rgb(74, 74, 74);
  //     line-height: 32px;
  //     align-content:left;
  //   }
  //   .individual-item {
  //     display: flex;
  //     align-items: flex-start;
  //     justify-content: flex-start;
  //     margin-bottom: 5px;
  //     .individual-order {
  //       width: 30px;
  //       margin-right: 25px;
  //     }
  //     .individual-content {
  //       flex: 1;
  //     }
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