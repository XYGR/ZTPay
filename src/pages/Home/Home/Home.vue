<template>
    <div>
    <div id="home" class="page">
        <app-scroll>
            <home-banner></home-banner>
            <home-notice></home-notice>
            <novice-benefit></novice-benefit>
            <home-footer></home-footer>
        </app-scroll>

    </div>
    <router-view></router-view>
    </div>
</template>

<script>
    import AppScroll from "../../../components/AppScroll";
    import Banner from "./Children/Banner";
    import Notice from "./Children/Notice";
    import NoviceBenefit from "./Children/NoviceBenefit";
    import Footer from "./Children/Footer";
    export default {
        name: "Home",
        components:{
            [AppScroll.name]:AppScroll,
            [Banner.name]:Banner,
            [Notice.name]:Notice,
            [NoviceBenefit.name]:NoviceBenefit,
            [Footer.name]:Footer
        }
    }
</script>

<style scoped lang="scss">

</style>