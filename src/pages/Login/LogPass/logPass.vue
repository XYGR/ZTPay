<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-16 21:37:14
 * @LastEditors: Please set LastEditors
 -->
<template>
<div>
    <div class="logPass page sub-page">
        <app-header title='登录'></app-header>
        <theme></theme>   
         <input type="text" class="NumInp" placeholder="请输入6-12位密码" ref="iptWord">
        <router-link :to="{path:'/login/passMess',query:{nums:this.nums}}"> <div class="Logmess" >短信码验证登录</div></router-link>
        <router-link to=""> <div class="Logbtn" @click="passAction" >登录</div></router-link>
          <h1>需要帮助</h1>
          <p>{{this.nums}}</p>
          <p>{{this.userkey}}</p>
         
  
         
   </div>
   <router-view></router-view>
    </div>
</template>

<script>
import Theme from "../common/theme";
import AppHeader from "../../../components/AppHeader";

export default {
  name: "LogPass",
  components: {
    [Theme.name]: Theme,
    [AppHeader.name]: AppHeader
  },
  data(){
    return{
       nums:this.$route.query.nums,
      
       userkey:""
    }
  },
  methods:{
    passAction:function(){
       this.userkey=this.$refs.iptWord.value
    }
  },
 
//  created(){
//       this.$store.dispatch('loginStore/requireUserData',{username:this.nums,password:this.userkey})
//  }
}
</script>

<style lang="scss" scoped>
   .logPass{
       width: 100%;
  height: 100%;
  background-color: #ffff;
  z-index: 3;
  .NumInp {
    border: 1px #fff solid;
    border-bottom: 1px rgba(235, 235, 235, 1) solid;
    margin-left: 0.68rem;
    width: 8.6133rem;
    height: 0.9333rem;
    font-size: 0.4rem;
    background: url(../../../assets/login/yan.png ) no-repeat right center
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

.Logmess{
    margin-left:6.96rem;
    font-size: 0.3733rem;
    margin-top:0.3733rem;
    color: #9D9EA0;
}
   }
</style>


