<template>
    <div class="page sub-page">
        <div class="normal-block">
            <app-header title="投标"></app-header>
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
        components:{
            [AppHeader.name]:AppHeader
        }
    }
</script>

<style scoped>

</style>