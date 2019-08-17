<template>
    <div class="page sub-page">
        <div>
            <app-header title="资产构成" :link="{value:'账单',to:'/mine/bill'}"></app-header>
            <div class="content">
                <assets-chart></assets-chart>
                <assets-info></assets-info>
                <assets-link></assets-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import Chart from "./Children/Chart";
    import Info from "./Children/Info";
    import Link from "./Children/Link";
    export default {
        name: "Assets",
        components:{
            [AppHeader.name]:AppHeader,
            [Chart.name]:Chart,
            [Info.name]:Info,
            [Link.name]:Link
        }
    }
</script>

<style scoped>

</style>