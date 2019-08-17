<template>
    <div class="page sub-page">
        <app-header title="实名认证"></app-header>
        <app-scroll>
            <!--         TODO 代码从这里开始写 -->
        </app-scroll>

    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import AppScroll from "../../../components/AppScroll";
    export default {
        name: "AuthenticationSuccess",
        components:{
            [AppHeader.name]:AppHeader,
            [AppScroll.name]:AppScroll,
        }

    }
</script>

<style scoped>

</style>