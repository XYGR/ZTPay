<template>
    <div class="page sub-page">
        <app-header title="信息纰漏"></app-header>
        <msg-tle></msg-tle>
        <AppScroll>
            <router-view></router-view>
        </AppScroll>
        
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

</style>