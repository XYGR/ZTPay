<template>
    <div class="page sub-page">
        <app-header title="信息纰漏"></app-header>
        <msg-tle></msg-tle>
        <app-scroll class="content">
            <router-view></router-view>
        </app-scroll>
        
    </div>
</template>

<script>
import AppHeader from '../../../components/AppHeader'
import Tle from './Children/Tle'
import AppScroll from '../../../components/AppScroll'
    export default {
        name: "Msg",
        components: {
            [AppHeader.name]:AppHeader,
            [Tle.name]:Tle,
            [AppScroll.name]:AppScroll
        }
    }
</script>

<style scoped>
    .content{
        top: 2.274rem;
    }
</style>