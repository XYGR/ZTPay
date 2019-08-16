<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-15 17:26:31
 * @LastEditors: your name
 -->
<template>
  <div id="app">
      <router-view></router-view>
      <tab-bar></tab-bar>
  </div>
</template>
<script>
    import TabBar from "./components/TabBar";
    export default {
        components:{
            [TabBar.name]:TabBar
        }
    }
</script>
<style lang="scss">

</style>
