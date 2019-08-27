<template>
  <div id="app">
    <!-- <Header v-show="title" :title="title" :hasClose="hasClose"/> -->
    <router-view/>
  </div>
</template>

<script>
import Header from 'components/Header.vue'
import router from './router'
export default {
  name: 'App',
  // components: { Header },
  data() {
    return {
      // title: '',
      // hasClose : false
    }
  },
  // created() {
  //   router.beforeEach((to, from, next) => {
  //     if(to.meta && to.meta.title) {
  //       this.title = to.meta.title
  //       this.hasClose = to.meta.hasClose
  //     } else {
  //       this.title = ''
  //       this.hasClose = false
  //     }
  //     next()
  //   })

  //   router.afterEach(() => {
  
  //   })
  }
  


</script>

<style>
@import 'style/reset.less';
#app {
  font-family: 'HelveticaNeue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
 /* margin-top: 60px;*/
}
</style>
