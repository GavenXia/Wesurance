<template>
  <!-- Myself -->
  <div class="form-wrap">
    <p>
      <span class="member">
        Member
        <span class="member-num">{{formIndex}}</span>
      </span>
      <span class="member-title">{{formdata.title}}</span>
    </p>

    <div class="form-item">
      <p>Gender*</p>
      <input class="Gender" v-model="form.gender" type="text" placeholder="Gender" />
    </div>

    <div class="form-item">
      <p>Surname*</p>
      <input class="Gender" v-model="form.surname" type="text" placeholder="Surname" />
    </div>

    <div class="form-item">
      <p>Given Name*</p>
      <input class="Gender" v-model="form.givename" type="text" placeholder="Given Name" />
    </div>

    <div class="form-item">
      <p>Date of birth*</p>
      <input class="Gender" v-model="form.datebirth" type="text" placeholder="Date of birth" />
    </div>

    <div>
      <button class="HKID">
        HKID
        <i class="cubeic-ok"></i>
      </button>
      <button class="passport">Passport Number</button>
    </div>

    <div class="HK">
      <span class="hkNumber">HKID Number :</span>
      <span>
        <input class="IDnumber" type="text" placeholder="A123456" />
      </span>
      <span>(</span>
      <span>
        <input class="num" type="text" placeholder="7"/>
      </span>
      <span>)</span>
    </div>
  </div>
</template>

<script>
/** 
1.编写组件分三步
a.此处为组件定义声明处
b.要用的地方引入
c.要用的地方注册组件就可以使用的
*/
export default {
  name: "formItem",
  props: {
    formdata: {
      require: true,
      type: Object
    },
    formIndex: {
      require: true,
      type: Number
    }
  },
  data() {
    return {
      form: {
        gender: "",
        surname: "",
        givename: "",
        datebirth: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "~style/mixin.less";
.form-wrap {
  padding: 20px;
  box-shadow: 0px 8px 20px 0 rgba(0, 0, 0, 0.14);
  // line-height: 65px;
  p {
    display: flex;
    justify-content: space-between;
    .member {
      color: @blue;
      font-weight: bold;
      font-size: 32px;
    }
    .member-num {
      color: @blue;
      font-weight: bold;
      font-size: 32px;
      margin-left: 15px;
    }
    .member-title {
      font-weight: bold;
      font-size: 32px;
      color: rgb(0, 0, 0);
      font-family: HelveticaNeue-Medium;
    }
  }
  .Gender {
    height: 75px;
    width: 100%;
    border-radius: 15px;
    font-size: 30px;
    border: 2px solid rgba(173, 175, 175, 0.199);
    text-indent: 20px;
    font-weight: bold;
  }
  input::-webkit-input-placeholder {
    color: rgb(233, 233, 233);
    letter-spacing: 2px;
    font-weight: 100;
  }
  .form-item {
    p {
      color: rgb(0, 0, 0);
    }
    line-height: 35px;
    margin-top: 20px;
  }
  .HKID {
    width: 316px;
    height: 56px;
    color: white;
    font-size: 30px;
    background: @blue;
    outline: none;
    border: none;
    border-radius: 10px;
    margin-top: 40px;
  }
  .passport {
    width: 316px;
    height: 56px;
    color: white;
    font-size: 30px;
    background: rgb(236, 235, 235);
    outline: none;
    border: none;
    border-radius: 10px;
    margin-top: 40px;
  }
  .HK {
    margin-top: 30px;
      font-size: 32px;
    margin-bottom: 10px;
    .hkNumber {
      color: rgb(0, 0, 0);
      // font-weight: bold;
      font-family: HelveticaNeue;
    }
    span {
      .IDnumber {
        width: 250px;
        height: 58px;
        border-radius: 13px;
        font-size: 30px;
        border: 2px solid rgba(173, 175, 175, 0.199);
        margin-left: 20px;
        text-align: right;
      }
      .num{
         width: 75px;
        height: 64px;
        border-radius: 13px;
        font-size: 30px;
        border: 2px solid rgba(173, 175, 175, 0.199);
        text-align: center;
      }
    }
  }
}
</style>