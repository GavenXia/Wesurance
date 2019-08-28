<template>
  <div id="app">
    <!-- <Header v-show="title" :title="title" :hasClose="hasClose"/> -->
    <router-view/>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'App',
  data() {
    return {
  
    }
  },
  }
  


</script>

<style>
@import 'style/reset.less';
#app {
  font-family: 'HelveticaNeue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  /* color: #2c3e50; */
 /* margin-top: 60px;*/
}
</style>
