<template>
    <div style="padding:15px;">
      <!-- 日历 -->
      <el-row>
        <el-col>
            <template>
              <div class="block">
                <el-date-picker
                  v-model="value1"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="DEPARTURE DATE"
                  end-placeholder="RETURN DATE">
                </el-date-picker>
              </div>
       </template>
        </el-col>
        </el-row>
      
       <!-- Companion -->
       <el-row justify="space-around">
         <el-col>
          
           <p >
             <span class="companion">Companion(s)</span>
             <span class="members"><span>2</span>members</span>
           </p>
         </el-col>

         <el-col>
           <div>
             
           </div>
           <el-col>
       </el-row>


    </div>
</template>
<script>
export default {
    data(){
        return{
            value1:''

        }
    }
}
</script>

<style scoped>
*{
  text-align: left;
}
.companion{
  
}
.members{
  color: rgb(155, 155, 155);
}
</style>