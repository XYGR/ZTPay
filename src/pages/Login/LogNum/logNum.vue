<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 23:37:58
 * @LastEditTime: 2019-08-16 11:53:07
 * @LastEditors: Please set LastEditors
 -->
 
<template>
<div>
    <div class="logNum page sub-page">    
        <app-header title='注册/登录'></app-header>
        <theme></theme>   
         <input type="text" class="NumInp" placeholder="请输入邮箱账号" ref="input">
        <router-link :to="{path:'/login/passWord',query:{nums:this.nums}}"> <div class="Logbtn" @click="numsAction" >下一步</div></router-link>
          <h1></h1>
        <div class="chat">
            <h2>微信登录</h2>
            <h3>qq登录</h3>
        </div>
    </div>
     <router-view></router-view>
    </div>
</template>

<script>

import Theme from "../common/theme";
import AppHeader from "../../../components/AppHeader";
export default {
  name: "LogNum",
  components: {
    [Theme.name]: Theme,
    [AppHeader.name]: AppHeader,

  },
  data(){
      return{
        nums:""
      }
  },
  methods:{
     numsAction:function(){
       this.nums=this.$refs.input.value;

     }
  }

};
</script>

<style lang="scss" scoped>
.logNum {
  width: 100%;
  height: 100%;
  background-color: #ffff;
  z-index: 2;

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
    margin-left:0.68rem;
    margin-top:1.4667rem;
    text-align: center;
    line-height: 1.3867rem;
  }
  h1{
      font-size: 0.32rem;
      color:#3A56C8;
      margin-left:7.6533rem;
      margin-right:0.8533rem;
  }
  .chat{
      margin-top:2.56rem;
      display: flex;
      margin-left: 1.7733rem;
      h2{
          flex: 1;
          font-size: 0.32rem;
          padding-left: 0.6267rem;
          background: url(../../../assets/login/wechat.png ) no-repeat left center;
      }
      h3{
          flex: 1;
           font-size: 0.32rem;
          padding-left: 0.6267rem;
          background: url(../../../assets/login/qq.png ) no-repeat left center;
      }
  }
}
</style>
