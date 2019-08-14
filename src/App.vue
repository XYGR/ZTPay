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
