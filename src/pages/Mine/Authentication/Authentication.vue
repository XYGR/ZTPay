<template>
    <div class="page sub-page">
        <div class="normal">
            <app-header title="实名认证"></app-header>
<!--         TODO 代码从这里开始写 -->
        </div>
        <transition name="van-slide-right">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    export default {
        name: "Authentication",
        components:{
            [AppHeader.name]:AppHeader
        }
    }
</script>

<style scoped>

</style>