<template>
  <div class="page-wrap">
    <div class="header progressive" >
      <!-- <span>Fintech</span><span>travel.com</span> -->
      <img class="preview" v-progressive="imgs.preview"  :src="imgs.src" alt="">
    </div>
    <p class="title">Welcome!</p>
    <p class="tip-text">Enter your mobile number and email to continue.</p>
          <p class="label">Enter you mobile number</p>
          <div class="flex ver-mid">
            <div class="area-wrap">
            <span class="areaCode">{{areaCode}}</span>
            <cube-select
              class="areaSelect"
              v-model="areaCode"
              placeholder=' ' 
              title=' '
              cancelTxt='Cancel'
              confirmTxt='Confirm'
              :options="areaOptions">
              <span>1</span>
            </cube-select>
            </div>
            <cube-input class="input-item" v-model="form.mobile" placeholder="8888 8888"></cube-input>
          </div>
          <p class="label" style="margin-top:30px">Enter your Email</p>
          <cube-input class="input-item" v-model="form.email" placeholder="example@email.com"></cube-input>
          <div class="form-tip">(ePolicy will be sent to your email address written above)</div>
          <p class="tixing">If you click on “Next” below, it means that you agree to our <span class="terms">terms</span> and <span class="privacy">privacy policies</span> .</p>
          <div class="button-bar" >
            <router-link to="/Travel">
            <button @click="next" class="next">
              Next
            </button>
            </router-link>
          </div>

    <!-- 底部 -->
    <div class="footer">
         <span class="Powered">Powered By</span>
        <span class="footerimgs"><img class="footerimg" src="../assets/images/Logo A@3x.png" alt=""></span>
    </div>
  </div>
</template>

<script>
import http from '@/api/http'
export default {
  name: 'Index',
  data () {
    return {
       imgs:
         {
           src:require('@/assets/images/Fintechtravel.com@xxxhdpi.png'),
           preview:require('@/assets/images/Fintechtravel.com@xxxhdpi.png')

         },
      areaCode: '+852',
      areaOptions: [
        { value: '+852', text: 'Hong Kong +852'},
        { value: '+63', text: 'Philippine +63'},
        { value: '+62', text: 'Indonesia +62'},
      ],
      form: {
        mobile: '',
        email: '',
      }
    }
  },
    created(){
      this.register()
      const toast = this.$createToast({
        time: 1000,
        txt: 'loading...'
      })
      toast.show()
    },
   
    methods: {
      next() {
        // this.register()
      },
      register() {
        const params =  {
          "phone":"5d15cda9971f320d262b810a",
          "phone_country_code":"03dfd96d875d43ba8ced522f3bbc0179",
          "web":"www.baidu.com",
          "email":"1448682783@qq.com"
        }
        // const requestConfig = {
        //   url:'/wesuapi4/web/add',
        //   method: 'post',
        //   data: params
        // }
        console.log(this.$http)
        console.log(http)
       this.$http.post('/wesupromo/web/add',params).then( 
          res => {
            console.log(res)
          }
        )
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '~style/mixin.less';
.page-wrap {
  padding: 80px 25px 154px 54px;
  background: @background;
  .header {
  text-align: center;
  width: 500px;
  height: 250px;
  margin: 0 auto;
  img{
  width: 100%;
  height: 100%;
  }
  
  }
  .title {
    color: #000;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
  }
  .tip-text {
    font-size: 32px;
    line-height: 41px;
    letter-spacing: 2px;
    color:@gray;
    margin-bottom: 102px;
    margin-top: 20px;
  }
  .label {
    font-size: 24px;
    letter-spacing: 1px;
    color: @gray;
    line-height: 28px;
    margin-bottom: 20px;
  }
  .area-wrap {
      position: relative;
      width: 160px;
      border-bottom: 4px solid #000;
      margin-right: 18px;
      .areaCode {
        position: absolute;
        height: 90px;
        right: 30px;
        left: 0;
        text-align: right;
        font-size: 44px;
        line-height: 90px;
        z-index: 1;
        color: #000;
      }
    .areaSelect {
      background: transparent;
      position: relative;
      z-index: 2;
      overflow: hidden;
      height: 90px;
      /deep/ .cube-select-text {
        color: transparent
      }
      &::after {
        border: none;
      }
      /deep/ span {
        font-size: 44px;
        color: #000;
      }
      /deep/ .cube-select-icon {
        border-width: 10px 6px 0 6px !important;
        border-color: #000 transparent transparent;
      }
    }
  }
  .input-item {
    height: 86px;
    line-height: 70px;
    font-size: 44px;
    border-bottom: 4px solid #000;
    &::after {
      border: none;
    }
    /deep/ input {
      color: #000;
      padding: 0;
    }
    /deep/ input::-webkit-input-placeholder {

       color:rgb(233,233,233);
       letter-spacing: 2px;
    }
  }
  .form-tip {
    margin-top: 6px;
    font-size: 20px;
    color: @gray;
    line-height: 24px;
  }
  .tixing{
  font-size:22px;
  line-height: 24px;
  margin-top: 120px;
}
.terms{
  color:#0081ff;
  text-decoration: underline;
}
 .privacy{
  color:#0081ff;
  text-decoration: underline;

 }
 .button-bar {
   margin: 0 auto;
   text-align: center;
   margin-top: 54px;
   margin-bottom: 102px;
 }
 .next{
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
 .footer {
  text-align: center;
  vertical-align: middle;
}
.Powered{
  display: inline-block;
  font-size:22px;
  margin-top: 100px;
  margin-left: -75px;
}
.footerimgs{
  display: inline-block;
  vertical-align: middle;
  width: 312px;
  height: 94px;
  line-height: 50px;
}
.footerimg{
  display: inline-block;
  vertical-align: middle;
   width: 100%;
   height: 100%;
}
}

</style>
