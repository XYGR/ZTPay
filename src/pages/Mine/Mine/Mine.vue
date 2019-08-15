<template>
    <div id="mine" class="page">
        <mine-header></mine-header>
        <app-scroll>
            <mine-balance></mine-balance>
        </app-scroll>
        <router-view></router-view>
    </div>
</template>

<script>
    import AppScroll from "../../../components/AppScroll";
    import Header from "./Children/Header";
    import Balance from "./Children/Balance";
    export default {
        name: "Mine",
        components:{
            [Header.name]:Header,
            [AppScroll.name]:AppScroll,
            [Balance.name]:Balance

        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    #mine{
        background-color: #FFFFFF;
        .app-scroll{
            width: calc(100% - 1.067rem);
            position: absolute;
            top: 1.6rem;
            bottom: 0;
            padding: 0 0.533rem;
        }
    }
</style>