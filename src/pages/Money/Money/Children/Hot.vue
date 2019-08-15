<template>
    <div class="money-hot">
        <h2 class="money-hot-title">高人气</h2>
        <div class="money-hot-main">
            <h3 class="money-hot-main-title">
                <p class="money-hot-main-title-text">新手专享15天预授权方案</p>
                <p class="money-com-tag once">限购一次</p>
                <p class="money-com-tag immediate">转让即到</p>
            </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "money-hot"
    }
</script>

<style scoped lang="scss">
    .money-hot{
        background-color: #ffffff;
        overflow: hidden;
        padding: 0 0.56rem 0.267rem;
        &-title{
            font-size: 0.507rem;
            line-height: 0.8rem;
            font-weight: bold;
            margin-top: 0.32rem;
            margin-bottom: 0.48rem;
            background: url("../../../../assets/money/money_hot.png") no-repeat left center;
            background-size: 0.4rem 0.467rem;
            text-indent: 0.667rem;
        }
        &-main{
            width: 100%;
            height: 6.667rem;
            box-shadow: 0 0.02rem 0.3rem #999;
            border-radius: 0.4rem;
            &-title{
                font-size: 0.32rem;
                padding-top: 0.347rem;
                height: 0.8rem;
                display: flex;
                align-items: center;
                &-text{
                    text-indent: 0.427rem;
                }
            }
        }
    }
</style>