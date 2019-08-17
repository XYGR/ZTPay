<template>
  <div>
    <div id="mine" class="page">
      <mine-header></mine-header>
      <app-scroll>
        <mine-balance></mine-balance>
        <mime-link></mime-link>
        <button class="mine-login-out">退出登录</button>
      </app-scroll>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppScroll from "../../../components/AppScroll";
import Header from "./Children/Header";
import Balance from "./Children/Balance";
import Link from "./Children/Link";
export default {
  name: "Mine",
  components: {
    [Header.name]: Header,
    [AppScroll.name]: AppScroll,
    [Balance.name]: Balance,
    [Link.name]: Link
  },
  mounted() {}
};
</script>

<style lang="scss">
#mine {
  background-color: #ffffff;
  .app-scroll {
    width: calc(100% - 1.067rem);
    position: absolute;
    top: 1.6rem;
    bottom: 0;
    padding: 0 0.533rem;
  }
  .mine-login-out {
    width: 100%;
    height: 1.04rem;
    font-size: 0.48rem;
    line-height: 1.04rem;
    color: #ffffff;
    text-align: center;
    margin-top: 2.133rem;
    margin-bottom: 0.267rem;
    background-color: #1f7dfd;
    border-radius: 0.133rem;
  }
}
</style>