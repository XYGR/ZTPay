<template>
    <div class="page sub-page">
        <app-header title="信息纰漏"></app-header>
        <msg-tle></msg-tle>
        <router-view></router-view>
    </div>
</template>

<script>
import AppHeader from '../../../components/AppHeader'
import Tle from './Children/Tle'
    export default {
        name: "Msg",
        components: {
            [AppHeader.name]:AppHeader,
            [Tle.name]:Tle,
        }
    }
</script>

<style scoped>

</style>