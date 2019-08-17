<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 16:34:44
 * @LastEditTime: 2019-08-17 17:43:14
 * @LastEditors: Please set LastEditors
 -->
<template>
    <div class="page sub-page">
        <div class="normal-block">
            <app-header title="投标"></app-header>     
        </div>
        <div class="Bid">
             <div class="showBid">
                 <h1>总金额(元)</h1>
                 <h2>0.00(元)</h2>
                 <ul>
                     <li v-for="index of 3"  :key="index">
                         <h3>昨日收益(元)</h3>
                           <h4>0.00</h4>
                     </li>
                 </ul>
                 <div>
                     <h5><img src="" alt=""></h5>
                     <h6><img src="" alt=""></h6>
                 </div>
                 <div>
                     <span>海南智投金服信息服务有限公司</span>
                     <span>本页面非任何法律文件，收益数据全供参考。过往
业绩不预期未来表现，市场有风险，投资需谨慎。</span>
                     <span>该页面由智投金服平台设计并提供</span>
                 </div>
             </div>

        </div>
        <transition name="van-slide-right">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import AppHeader from "../../../components/AppHeader";
export default {
  name: "Bid",
  components: {
    [AppHeader.name]: AppHeader
  }
};
</script>

<style lang="scss" scoped>
.showBid {
  background: #fff;
  width: 9.2667rem;
  height: 4.6133rem;
  box-shadow: 0px 0px 10px 0px rgba(169, 169, 169, 0.3);
  margin-top: 1rem;
  margin-left:28px;
  overflow: hidden;
   h1{
       margin-top:0.6933rem;
       margin-left: 3.56rem;
       font-size: 0.4533rem;
   }
   h2{
       font-size: 0.32rem;
       margin-top:38.0025px;
       margin-left: 4.0667rem;
   }
}
</style>