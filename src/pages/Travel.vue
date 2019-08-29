<template>
    <div class="page-wrap">
    <div class="header progressive" >
      <img class="banner preview" v-progressive="imgs.preview"  :src="imgs.src"  alt="">
    </div>
      <div class="container-wrap">
        <p class="title">Travel Insurance</p>
        <p class="part-title"><span>Departure and Return Date</span></p>
        <div class="date-part">
          <cube-button @click="showDatePicker('departureDate')">
            <div class="date-pick">
              <p class="date-label">DEPARTURE DATE</p>
              <span :class="{'date-value':true, 'empty': !date.departureDate}">{{date.departureDate ? date.departureDate : 'XXXX-XX-XX'}}</span>
            </div>
          </cube-button>
          <cube-button @click="showDatePicker('returnDate')">
            <div class="date-pick">
              <p class="date-label">RETURN DATE</p>
              <span :class="{'date-value':true, 'empty': !date.returnDate}">{{date.returnDate ? date.returnDate : 'XXXX-XX-XX'}}</span>
            </div>
          </cube-button>
        </div>
        <p class="part-title"><span>Companion(s)</span><span>{{counts}} members</span></p>
        <div class="Companion-part">
          <div @click="handlecount('select','myself')"><span>Myself</span><span :class="{'checkBox':true, 'selected':count.myself !== 0}"></span></div>
          <div @click="handlecount('select','spouse')"><span>My Spouse</span><span :class="{'checkBox':true, 'selected':count.spouse !== 0}"></span></div>
          <div><span>My Child <i>aged below 18</i></span><span><i @click="handlecount('sub','child')" class="action-button sub"></i><span>{{count.child}}</span><i @click="handlecount('add','child')" class="action-button add"></i></span></div>
          <div><span>Family and friends</span><span><i @click="handlecount('sub','friends')" class="action-button sub"></i><span>{{count.friends}}</span><i @click="handlecount('add','friends')" class="action-button add"></i></span></div>
        </div>

        <div class="button-bar">          
          <router-link to="/info">
            <button class="next">
              Show My Results
            </button>
            </router-link>           
          </div>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
          imgs:
         {
           src:require('@/assets/images/starrTraveLeadEssential.png'),
           preview:require('@/assets/images/starrTraveLeadEssential.png')

         },
          date: {
            departureDate: '2019-08-26',
            returnDate: '',
            departureDateObj : new Date(),
            returnDateObj: new Date()
          },
          count: {
            myself: 0,
            spouse: 0,
            child: 0,
            friends: 0
          },
          dateType: ''
        }
    },
    created(){
      const toast = this.$createToast({
        time: 1000,
        txt: 'loading...'
      })
      toast.show()
    },
    methods: {
      handlecount (type,field) {
        if(type === 'select') {
          this.count[field] = this.count[field] === 0 ? 1 : 0
        } else if (type === 'sub' && this.count[field] > 0) {
          this.count[field] = this.count[field] - 1;
        } else if (type === 'add') {
          this.count[field] = this.count[field] + 1;
        }
      },
      showDatePicker(type) {
        this.dateType = type
        if (!this.datePicker) {
          this.datePicker = this.$createDatePicker({
            title: 'Date Picker',
            min: new Date(2008, 7, 8),
            max: new Date(2020, 9, 20),
            value: new Date(),
            cancelTxt: 'Cancel',
            confirmTxt: 'Confirm',
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
          })
        }
        this.datePicker.show()
          setTimeout(() => {
            this.datePicker.$updateProps({
              title: type === 'departureDate' ?  'Departure Date' : 'Return Date',
              value: type === 'departureDate' ? this.date.departureDateObj : this.date.returnDateObj,
            })
          }, 0)
      },
      selectHandle(date, selectedVal, selectedText) {
        console.log(date,selectedVal,selectedText)
          this.date[this.dateType] = this.dateTozero(selectedVal).join('-');
          this.date[`${this.dateType}Obj`] = date;
      },
      dateTozero (arr) {
        return arr.map(item => item < 10 ? '0' + item : '' + item)
      },
      cancelHandle() {

      }
    },
    computed:{
      counts() {
        return this.count.myself + this.count.spouse + this.count.child + this.count.friends;
      }
    }
}
</script>

<style lang="less" scoped>
@import '~style/mixin.less';
.page-wrap {
  .banner {
    display: block;
    width: 750px;
  }
  .container-wrap {
    padding: 24px 34px 54px 34px;
    .title {
      color: #000;
      font-weight: 500;
      font-size: 44px;
      line-height: 52px;
      margin-bottom: 62px;
    }
    .part-title {
      color: #000;
      font-size: 28px;
      line-height: 34px;
      display: flex;
      justify-content:space-between;
      align-items: center;
      > span {
        &:nth-of-type(1){
          font-weight: 500;
        }
        &:nth-of-type(2){
          color: rgb(155, 155, 155)
        }
      }
    }
    .date-part {
      overflow: hidden;
      margin-top: 18px;
      margin-bottom: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 22px;
      background: #fff;
      box-shadow: 0px 8px 40px 0 rgba(0, 0, 0, 0.14);
      /deep/ .cube-btn {
        background: #fff;
      }
      .date-pick {
        padding: 24px 0 20px 0;
        .date-label {
          color:@gray;
          font-weight:500;
          margin: 0px 0 26px 0;
          font-size: 22px;
          line-height: 24px;
        }
        .date-value {
          color:@blue;
          font-weight:500;
          font-size: 34px;
          line-height: 46px;
          &.empty {
            color: rgb(155, 155, 155)
          }
        }
      }
    }
    .Companion-part {
      padding: 15px 0;
      margin-top: 26px;
      margin-bottom: 134px;
      border-radius: 22px;
      background: #fff;
      box-shadow: 0px 8px 40px 0 rgba(0, 0, 0, 0.14);
      >div {
        padding: 0 38px 0 50px;
        margin:  23px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span {
          vertical-align: middle;
          &.checkBox {
            display: inline-block;
            width: 44px;
            height: 44px;
            background: url('../assets/images/TickOff@3x.png') no-repeat center center/44px 44px;
            &.selected {
              background: url('../assets/images/Tick@3x.png') no-repeat center center/44px 44px;
            }
          }
          >span {
            vertical-align: middle;
            display: inline-block;
            width: 44px;
            height: 44px;
            text-align: center;
            line-height:44px;
          }

          .action-button {
            vertical-align: middle;
            display: inline-block;
            width: 44px;
            height: 44px;
            &.sub {
              background: url('../assets/images/reduce@3x.png') no-repeat center center/44px 44px;
            }
            &.add {
              background: url('../assets/images/Add@3x.png') no-repeat center center/44px 44px;
            }

          }

          &:first-of-type {
            color:#000;
            font-weight:500;
            font-size: 34px;
            line-height: 40px;
            > i {
              font-size: 20px;
              font-style: normal;
            }
          }
        }
      }
    }
    .button-bar {
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
  }

}
</style>