<template>
    <div class="home-footer">
        <div class="home-footer-honor">
            <span class="home-footer-honor-item">互金协会会员</span>
            <span class="home-footer-honor-item">互金协会会员</span>
            <span class="home-footer-honor-item">互金协会会员</span>
            <span class="home-footer-honor-item">互金协会会员</span>
        </div>
        <h3 class="home-footer-desc">历史参考扣费后利率不代表实际回报率</h3>
    </div>
</template>

<script>
    export default {
        name: "home-footer"
    }
</script>

<style scoped lang="scss">
    .home-footer-honor{
        height: 0.587rem;
        padding: 0 0.267rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &-item{
            color: #999999;
            font-size: 0.24rem;
        }
    }
    .home-footer-desc{
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0.067rem 0;
        text-align: center;
        background-color: #ffffff;
        color: #999999;
        font-size: 0.24rem;
    }
</style>