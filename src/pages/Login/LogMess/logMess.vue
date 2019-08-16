<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-16 08:34:23
 * @LastEditors: Please set LastEditors
 -->
<template>

<div class="logMess page sub-page">
        <app-header title='登录'></app-header>
        <theme></theme>   
        <div class="codewrap">
         <input type="text" class="NumInp" placeholder="请输入验证码">
         <div><button>获取验证码</button></div>
         </div>
        <router-link to="home"> <div class="Logbtn" >登录</div></router-link>
       
    </div>


</template>

<script>
import Theme from "../common/theme";
import AppHeader from "../../../components/AppHeader";
export default {
  name: "LogMess",
  components: {
    [Theme.name]: Theme,
    [AppHeader.name]: AppHeader
  }
};
</script >

<style lang="scss" scoped>
.logMess {
  width: 100%;
  height: 100%;
  background-color: #ffff;
  z-index: 4;
  .NumInp {
    border: 1px #fff solid;
    border-bottom: 1px rgba(235, 235, 235, 1) solid;
    margin-left: 0.68rem;
    width: 8.6133rem;
    height: 0.9333rem;
    font-size: 0.4rem;
   
  }
  .Logbtn {
    width: 8.6rem;
    height: 1.3867rem;
    background: rgba(184, 184, 184, 1);
    border-radius: 0.0667rem;
    font-size: 0.48rem;
    margin-left: 0.68rem;
    margin-top: 1.4667rem;
    text-align: center;
    line-height: 1.3867rem;
  }
  h1 {
    font-size: 0.32rem;
    color: #3a56c8;
    margin-left: 7.6533rem;
    margin-right: 0.8533rem;
  }

  .Logmess {
    margin-left: 6.96rem;
    font-size: 0.3733rem;
    margin-top: 0.3733rem;
    color: #9d9ea0;
  }
  .codewrap{
      position: relative;
      button{
          position: absolute;
          left:7.4867rem;
         top:0.2333rem;
          font-size:0.4rem;
          background: #fff;
      }
  }
}
</style>
