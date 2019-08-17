<template>
     <div class="page sub-page">
        <app-header title="撤销"></app-header>
         <div class="content">
             <bid-withdraw-status></bid-withdraw-status>
             <bid-withdraw-info></bid-withdraw-info>
         </div>
         <router-link class="bid-withdraw-again" to="/money/bid/1">再投一次</router-link>
     </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import Status from "./Children/Status";
    import Info from "./Children/Info";
    export default {
        name: "BidWithdraw",
        components:{
            [AppHeader.name]:AppHeader,
            [Status.name]:Status,
            [Info.name]:Info
        }
    }
</script>

<style scoped>
    .bid-withdraw-again{
        width: 100%;
        height: 1.307rem;
        display: block;
        background-color: #2A89FA;
        color: #FFFFFF;
        text-align: center;
        font-size: 48px;
        line-height: 1.307rem;
        position: fixed;
        bottom: 0;
    }
</style>