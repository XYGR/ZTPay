<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:26:31
 * @LastEditTime: 2019-08-17 15:19:04
 * @LastEditors: Please set LastEditors
 -->
<template>

<div class="logMess page sub-page">
        <app-header title='登录'></app-header>
        <theme></theme>   
        <div class="codewrap">
         <input type="text" class="NumInp" placeholder="请输入验证码" ref="userCode">
         <div class="wenzi"><button type="button" @click="getCode" :disabled="disabled">{{this.btnTxt}}</button></div>
         </div>
       <div class="Logbtn" @click="userLogin">登录</div>
       
    </div>


</template>

<script>
import { mapState } from "vuex";
import Theme from "../common/theme";
import AppHeader from "../../../components/AppHeader";
import { Toast } from "vant";

export default {
  name: "LogMess",
  components: {
    [Theme.name]: Theme,
    [AppHeader.name]: AppHeader
  },
  data() {
    return {
      disabled: false,
      nums: this.$route.query.nums,
      userCode: "",
      btnTxt: "获取验证码",
      time: 0
    };
  },
  computed: {
    ...mapState({
      CodeData: state => state.loginStore.userCode
    })
  },
  methods: {
    getCode: function() {
      this.$store.dispatch("loginStore/requireCodeData", this.nums);
      this.time = 60;
      this.disabled = true;

      this.timer();
    },

    timer() {
      console.log(this.time);
      if (this.time > 0) {
        this.time--;
        this.btnTxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btnTxt = "获取验证码";
        this.disabled = false;
      }
    },
    //用户登录判断
    userLogin: function() {
      this.userCode = this.$refs.userCode.value;
      if (this.userCode === this.CodeData && this.userCode != "") {
        Toast.success({
          duration: 2000, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: "spinner",
          message: "恭喜您！登陆成功",
          onClose:()=>{
            this.$router.push({ path: "/" })
          }
        });
        
        clearTimeout(this.timer);
      } else {
      Toast.fail({
          duration: 3000, // 持续展示 toast
          forbidClick: true, // 禁用背景点击
          loadingType: "spinner",
          message: "验证码错误\n请重新输入"
        });
      }
    }
    //验证码60s 显示
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
  .codewrap {
    position: relative;
    button {
      position: absolute;
      left: 7.4867rem;
      top: 0.2333rem;
      font-size: 0.36rem;
      background: #fff;
      text-align: center;
    }
  }
}
</style>
