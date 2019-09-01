<template>
  <div class="page-wrap">
    <div class="header progressive">
      <!-- <span>Fintech</span><span>travel.com</span> -->
      <img class="preview" v-progressive="imgs.preview" :src="imgs.src" alt />
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
          placeholder=" "
          title=" "
          cancelTxt="Cancel"
          confirmTxt="Confirm"
          :options="areaOptions"
        >
          <span>1</span>
        </cube-select>
      </div>
      <cube-input class="input-item" v-model="form.mobile" placeholder="8888 8888"></cube-input>
    </div>
    <p style="margin-top:10px;color:red;">{{mobileError}}</p>
    <p class="label" style="margin-top:30px">Enter your Email</p>
    <cube-input class="input-item" v-model="form.email" placeholder="example@email.com"></cube-input>
    <p style="margin-top:10px;color:red;">{{emailError}}</p>

    <div class="form-tip">(ePolicy will be sent to your email address written above)</div>
    <p class="tixing">
      If you click on “Next” below, it means that you agree to our
      <span class="terms">terms</span> and
      <span class="privacy">privacy policies</span> .
    </p>
    <div class="button-bar">
      <router-link to>
        <button @click="next" class="next">Next</button>
      </router-link>
    </div>

    <!-- 底部 -->
    <div class="footer">
      <span class="Powered">Powered By</span>
      <span class="footerimgs">
        <img class="footerimg" src="../assets/images/Logo A@3x.png" alt />
      </span>
    </div>
  </div>
</template>

<script>
import http from "@/api/http";
export default {
  name: "Index",
  data() {
    return {
      imgs: {
        src: require("@/assets/images/Fintechtravel.com@xxxhdpi.png"),
        preview: require("@/assets/images/Fintechtravel.com@xxxhdpi.png")
      },
      areaCode: "+86",
      areaOptions: [
        { value: "+852", text: "Hong Kong +852" },
        { value: "+63", text: "Philippine +63" },
        { value: "+62", text: "Indonesia +62" },
        { value: "+86", text: "China +86" }
      ],
      form: {
        mobile: "",
        email: ""
      },
      mobileError: "",
      emailError: "",
      validateObj: {
        flag: true,
        msg: ''
      }
    };
  },
  created() {
    const toast = this.$createToast({
      time: 1000,
      txt: "loading..."
    });
    toast.show();
  },
  mounted() {},

  methods: {
    next() {
      this.validate(); //最上面调用表单校验方法
      if(!this.validateObj.flag) { // 如果表单某项有错误则弹出toast 并带出错误信息this.validateObj.msg
         this.$createToast({
        txt: this.validateObj.msg,
        type: 'txt'
      }).show();
        return false; 

      }
      

      //参数
      const params = {
        phone: this.form.mobile,
        phone_country_code: this.areaCode,
        web: "www.baidu.com",
        email: this.form.email
      };
      this.$http.post("/wesupromo/web/add", params).then(res => {
        if(res.status === 100 ){
          console.log(res)
          sessionStorage.setItem('userId',res.data.id);
          this.$router.push({ path: '/Travel',query:{ phone_country_code: this.areaCode}}) 
        }
      });
    },
    validate () {
      this.validateObj = {
        flag: true,
        msg: ''
      }
      if( this.form.mobile == "") {
        this.validateObj.flag && (this.validateObj = { flag: false, msg: '手机号不能为空' })
      } else if(this.form.mobile != "") {
          const reg = /^1[3456789]\d{9}$/;
          if(this.areaCode == "+86") {
             !reg.test(this.form.mobile) && this.validateObj.flag && ( this.validateObj = { flag: false, msg: '请输入有效的手机号' })
          } else if (this.areaCode == "+852") {
            this.form.mobile.length != 8 && this.validateObj.flag && ( this.validateObj = { flag: false, msg: '请输入有效的手机号' })
          } else {
            this.form.mobile.length <=5 && this.validateObj.flag && ( this.validateObj = { flag: false, msg: '请输入有效的手机号' })
          }
      }
      
      if (this.form.email == "") {
        this.validateObj.flag && (this.validateObj = { flag: false, msg: '邮箱不能为空' })
      } else if (this.form.email != "") {
         const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        !reg.test(this.form.email) && this.validateObj.flag && ( this.validateObj = { flag: false, msg: '请输入有效的邮箱' })
          
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~style/mixin.less";
.page-wrap {
  padding: 80px 25px 154px 54px;
  background: @background;
  .header {
    text-align: center;
    width: 500px;
    height: 250px;
    margin: 0 auto;
    img {
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
    color: @gray;
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
        color: transparent;
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
      color: rgb(233, 233, 233);
      letter-spacing: 2px;
    }
  }
  .form-tip {
    margin-top: 6px;
    font-size: 20px;
    color: @gray;
    line-height: 24px;
  }
  .tixing {
    font-size: 22px;
    line-height: 24px;
    margin-top: 120px;
  }
  .terms {
    color: #0081ff;
    text-decoration: underline;
  }
  .privacy {
    color: #0081ff;
    text-decoration: underline;
  }
  .button-bar {
    margin: 0 auto;
    text-align: center;
    margin-top: 54px;
    margin-bottom: 102px;
  }
  .next {
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
  .footer {
    text-align: center;
    vertical-align: middle;
  }
  .Powered {
    display: inline-block;
    font-size: 22px;
    margin-top: 100px;
    margin-left: -75px;
  }
  .footerimgs {
    display: inline-block;
    vertical-align: middle;
    width: 312px;
    height: 94px;
    line-height: 50px;
  }
  .footerimg {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
}
</style>
