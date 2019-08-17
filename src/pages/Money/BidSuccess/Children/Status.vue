<template>
    <div class="bid-success-status">
        <h2 class="bid-success-status-title"><img src="../../../../assets/money/logo.png" alt=""> 海南智投金服责任有限公司</h2>
        <p class="bid-success-status-info">¥{{$route.params.amount}}</p>
        <p class="bid-success-status-info">投标成功</p>
        <div class="bid-success-status-time">
            <img src="../../../../assets/money/Bid_shijian.png" alt="">
            <div class="bid-success-status-time-block">
                <p class="bid-success-status-time-start">07-11 星期一 确认投标 开始计算收益 </p>
                <p class="bid-success-status-time-end">07-26 星期一 结束计算收益 </p>
            </div>
        </div>
        <p class="bid-success-status-tips">买入价格按照投标时间计算净值</p>
    </div>
</template>

<script>
    export default {
        name: "bid-success-status"
    }
</script>

<style scoped lang="scss">
    .bid-success-status{
        padding: 1.2rem 0.533rem 0.4rem;
        border-bottom: 0.027rem solid #F4F4F4;
        &-title{
            text-align: center;
            height: 0.72rem;
            line-height: 0.72rem;
            font-size: 0.32rem;
            color: #000;
            display: flex;
            justify-content: center;
            img{
                margin-right: 0.133rem;
            }
        }
        &-info{
            font-size: 0.32rem;
            line-height: 0.32rem;
            margin-top: 0.187rem;
            text-align: center;
            color: #000;
        }
        &-time{
            margin-top: 1.333rem;
            display: flex;
            img{
                width: 0.56rem;
                height: 1.733rem;
                margin-bottom: 0.133rem;
            }
            &-block{
                margin-left: 0.213rem;
                font-size: 0.32rem;
                color: #666;
                display: flex;
                justify-content: space-between;
                flex-direction: column;
            }
            &-start{
                line-height: 0.587rem;
            }
        }
        &-tips{
            font-size: 0.347rem;
            line-height: 0.32rem;
            color: #666;
            margin-top: 0.667rem;
        }
    }
</style>