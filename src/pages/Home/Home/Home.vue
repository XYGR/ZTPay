<template>
    <div id="home" class="page">
        <app-scroll>
            <home-banner></home-banner>
            <home-notice></home-notice>
        </app-scroll>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppScroll from "../../../components/AppScroll";
    import Banner from "./Children/Banner";
    import Notice from "./Children/Notice";
    export default {
        name: "Home",
        components:{
            [AppScroll.name]:AppScroll,
            [Banner.name]:Banner,
            [Notice.name]:Notice
        }
    }
</script>

<style scoped lang="scss">

</style>