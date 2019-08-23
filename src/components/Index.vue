<template>
  <div style="padding:15px;">
    <!-- 标题 -->
    <el-row :gutter="10">
        <el-col :xs="24">
           <div class="grid-content bg-purple">
             <div class="title">KLOOK</div>
           </div>
    </el-col>  
   </el-row>

    <!-- Welcome -->
    <el-row>
      <el-col :xs="6">
        <h2>Welcome!</h2>       
      </el-col>
      <!-- <el-col :xs="18">
      </el-col> -->
    </el-row>

    <!-- enter -->
    <el-row >
      <el-col :xs="23">       
        <p >Enter your mobile number and email to continue.</p>
      </el-col>
    </el-row>
    
    <!-- 表单 -->
    <el-row>
      <el-col>        
        <form>
          <p>Enter you mobile number</p><br>
          <span >
            <select name="drop" class="dropdown">
            <option value="+852">+852</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            </select>
          </span>
          <input class="mobile-number" type="text" placeholder="8888 8888"><br>
          <p style="margin-top:20px;"> Enter your Email</p><br>
          <input class="email" type="email" placeholder="example@email.com">
          <div style="font-size:10px;margin-top:8px;">(ePolicy will be sent to your email address written above)</div>
          <p class="tixing">If you click on “Next” below, it means that you agree to our <span class="terms">terms</span> and <span class="privacy">privacy policies</span> .</p>
          <div class="button-bar">
            <button class="next">
              Next
            </button>
          </div>
          </form>
      </el-col>
    </el-row>

    <!-- 底部 -->
    <div class="footer">
         <span class="Powered">Powered By</span>
        <span class="footerimgs"><img class="footerimg" src="../assets/images/Logo A@3x.png" alt=""></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  text-align: left;
}
.title{
  color: orangered;
  font-weight: bold;
  font-size: 40px;
  text-align: center;
}
.dropdown{
  border-top: none;
  border-left: none;
  border-right: none; 
  border-bottom-color:black; 
  height: 40px;
  width: 140px;
  
}
.mobile-number{
  width: 525px;
  height: 30px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color:#1f1e1e; 
}
.email{
  width: 670px;
  height: 30px;

  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color:#1f1e1e; 
}
 input::-webkit-input-placeholder {
       /* placeholder颜色  */
       color: #e7e8e9;
       /* placeholder字体大小  */
       font-size: 25nppx;
    }
.tixing{
  font-size:11px;
  margin-top: 70px;
}
.terms{
  color:#0081ff;
  text-decoration: underline;
}
 .privacy{
  color:#0081ff;
  text-decoration: underline;

 }
 .next{
   width: 290px;
   height: 90px;   
   border: none;
   border-radius: 10px;
   background:#02A447;
   color: white;   
   text-align: center;
   font-size:30px;
   margin-top: 20px;
 }
 .button-bar {
   text-align: center;
 }
.Powered{
  display: inline-block;
  font-size:22px;
  margin-top: 100px;
  margin-left: -75px;
}
.footer {
  text-align: center;
  vertical-align: middle;
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
</style>
