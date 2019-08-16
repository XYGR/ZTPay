<template>
    <div class="bid-success page sub-page">
        <app-header title="投标"></app-header>
        <div class="content">
            <bid-success-status></bid-success-status>
            <bid-success-info></bid-success-info>
        </div>
        <router-link class="bid-success-again" to="/money/bid/1">再投一次</router-link>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import Status from "./Children/Status";
    import Info from "./Children/Info";
    export default {
        name: "BidSuccess",
        components:{
            [AppHeader.name]:AppHeader,
            [Status.name]:Status,
            [Info.name]:Info
        }
    }
</script>

<style scoped>
    .bid-success-again{
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