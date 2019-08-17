<template>
    <div class="assets-link">
        <router-link class="assets-link-item" to="mine/assets/cash">提现</router-link>
        <router-link class="assets-link-item" to="mine/assets/invest">充值</router-link>
    </div>
</template>

<script>
    export default {
        name: "assets-link"
    }
</script>

<style scoped lang="scss">
    .assets-link{
        display: flex;
        justify-content: space-between;
        padding: 0 2rem;
        margin-top: 1.68rem;
        &-item{
            width: 2.053rem;
            height: 0.8rem;
            display: block;
            text-align: center;
            line-height: 0.8rem;
            background-color: #1F7DFD;
            color: #FFFFFF;
            font-size: 0.4rem;
        }
    }
</style>