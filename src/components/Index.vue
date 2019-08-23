<template>
  <div>
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
        <h4>Welcome!</h4>       
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
        <!-- <el-form ref="form" >
         <el-form-item label="Enter you mobile number">
          <div class="dropdown"></div>
         </el-form-item>
        </el-form> -->
        <form>
          <div>Enter you mobile number</div><br>
          <span >
            <select name="drop" class="dropdown">
            <option value="+852">+852</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
            </select>
          </span>
          <input class="mobile-number" type="text" placeholder="8888 8888"><br>
          <div style="margin-top:10px;"> Enter your Email</div><br>
          <input class="email" type="email" placeholder="example@email.com">
          <div style="font-size:10px;">(ePolicy will be sent to your email address written above)</div>
          <p class="tixing">If you click on “Next” below, it means that you agree to our <span class="terms">terms</span> and <span class="privacy">privacy policies</span> .</p>
          <button class="next">
            Next
          </button>
          </form>
      </el-col>
    </el-row>
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
  
}
.mobile-number{
  width: 285px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color:#1f1e1e; 
}
.email{
  width: 340px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-color:#1f1e1e; 
}
.tixing{
  font-size:11px;
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
   width: 180px;
   height: 55px;   
   border: none;
   border-radius: 5px;
   background:#02A447;
   color: white;   
   text-align: center;
   font-size:18px;
   

 }

</style>
