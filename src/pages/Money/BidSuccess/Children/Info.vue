<template>
    <div class="bid-success-info">
        <h3 class="bid-success-info-title">投标信息</h3>
        <div class="bid-success-info-item">
            <p class="bid-success-info-item-title">投标产品</p>
            <p class="bid-success-info-item-desc">新手专享15天授权方案</p>
        </div>
        <div class="bid-success-info-item">
            <p class="bid-success-info-item-title">投标金额</p>
            <p class="bid-success-info-item-desc">{{$route.params.amount}}(元)</p>
        </div>
        <div class="bid-success-info-item">
            <p class="bid-success-info-item-title">投标时间</p>
            <p class="bid-success-info-item-desc">2019-07-11-20:10:10</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bid-success-info",
    }
</script>

<style scoped lang="scss">
    .bid-success-info{
        padding: 0.48rem 0.533rem;
        background-color: #FFFFFF;
        &-title{
            font-size: 0.4rem;
            font-weight: bold;
        }
        &-item{
            display: flex;
            height: 0.32rem;
            line-height: 0.32rem;
            font-size: 0.32rem;
            color: #666;
            justify-content: space-between;
            margin-top: 0.4rem;
            &:last-of-type{
                color: #333;
            }
        }
    }
</style>