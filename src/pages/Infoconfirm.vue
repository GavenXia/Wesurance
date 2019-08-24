<template>
    <div class="page-wrap" >
         <p class="title">Displayed and owned by</p>

         <div class="headerimgs">
            <img class="headerimg" src="@/assets/images/CompanyLogo@3x.png" alt="">
          </div>

         <p class="travelead">TraveLead Travel Insurance - Essential Plan</p>

        <p class="budget">Most budget choice - covering medical expenses.</p>

        <div class="travel-insurance">Travel Insurance</div>
          
          <!-- 价格 -->
        <div class="price">HK$190</div>

        <div><img class="box" src="@/assets/images/starrTraveLeadEssential.png" alt=""></div>
       
       <!-- 总天数和总人数 -->
        <div class="people">
            <span class="days"><span>5</span>Days</span><span class="line">|</span>
            <span class="adults"><img class="adultsimg" src="@/assets/images/Adults@3x.png" alt=""></span><span class="adultsnum">3</span>
            <span class="friends"><img class="friendsimg" src="@/assets/images/friends Copy@3x.png"></span><span class="friendsnum">1</span>
            <span> <i class="cubeic-arrow"></i> </span>
        </div>
        
        <!-- Single Plan和Annual Plan -->
        <div class="buttons">
            <button class="single" >Single Plan</button>
            <button class="annual" >Annual Plan</button>
        </div>

        <div class="trip">
            A trip not exceeding 180 consecutive days.
        </div>

        <!-- Key Features -->
        <div>
            <p>Key Features</p>
            <p>'1. Medical Expenses up to HK$500,000, including in and outpatient treatments, No sublimit or restriction on outpatient expenses and number of visits
                2. No co-payment or deductible
                3. Cover amateur sports e.g. hot air ballooning, scuba diving, skiing, etc.</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
@import '~style/mixin.less';
.page-wrap{
    padding: 34px;
.title{
    color: rgb(155, 155, 155);
    font-size: 9px;
    margin-bottom: 30px;
}
.travelead{
    color: #000;
      font-weight: 700;
      font-size: 44px;
      line-height: 52px;
      margin-bottom: 15px;
      margin-top: 32px;
}
.budget{
    color: #000;
      font-weight: 600;
      font-size: 34px;
      line-height: 42px;
      margin-bottom: 10px;      
}
.travel-insurance{
    color:rgb(142,142,147);
    font-size: 30px;
}
.headerimgs{
    width: 165px;
    height: 76px;
}
.headerimg{
    width: 100%;
    height: 100%;
}
.price{
    text-align:right;
    color: rgb(12, 129, 255);
    font-size: 35px;
    font-weight: bold;
    margin-bottom: 35px;
}
.box{
    border-radius: 10px;
}
.people{
    width: 100%;
        border-bottom: 1px solid rgb(209, 208, 208);

    line-height: 80px;
     display: flex;
      justify-content:space-between;
      align-items: center;
      >span{
          vertical-align: middle;
      }
}
.days{
    font-size: 32px;
     color: rgb(74,74,74);
   
    >span{
    margin-left: 20px;
    margin-right: 15px;
   
    }
}
.line{
    font-size: 40px;
    color:rgb(151,151,151);
    margin-left: -100px;
}
.adults{
    display: inline-block;
    width: 47px;
    height: 47px;
    margin-right: -100px;
}
.adultsimg{
    width: 100%;
    height: 100%;

}
.friends{
    display: inline-block;
    width: 47px;
    height: 47px;
    margin-right: -100px;

}
.friendsimg{
    width: 100%;
    height: 100%;
}
.adultsnum{
    color: rgb(74,74,74);
    font-size: 30px;
    margin-right: -75px;

}
.friendsnum{
    color: rgb(74,74,74);
    font-size: 30px;    
}
.cubeic-arrow{
    color: rgba(0,0,0,0.25);
    font-size: 32px;
    font-weight: bold;
}
.buttons{
    line-height: 100px;
}
.single{
    background: rgb(12,129,255);
    width: 260px;
    height: 65px;
    border-radius: 35px;
    color: white;
    font-weight: 550;
    font-size: 30px;
    outline: none;
    border: none;
}
.annual{
    background: rgb(224, 223, 223);
    width: 260px;
    height: 65px;
    border-radius: 35px;
    color: rgb(177, 175, 175);
    font-weight: 550;
    font-size: 30px;
    outline: none;
    border: none;
}
.trip{
    color: rgb(18, 139, 252);
    font-weight: 500;
    border-bottom: 1px solid rgb(209, 208, 208);
    line-height: 65px;
    
}
}
</style>