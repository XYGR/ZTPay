<template>
    <div class="bid-content">
        <h3 class="money-com-title">
            <p class="money-com-title-text">新手专享30天预授权方案</p>
            <p class="money-com-title-tag solid">限购一次</p>
            <p class="money-com-title-tag hollow">转让即到</p>
        </h3>
        <div class="bid-content-info">
            <div class="bid-content-info-item">
                <p class="bid-content-info-item-text">6<span>%+6%</span></p>
                <p class="bid-content-info-item-desc">年利率</p>
            </div>
            <div class="bid-content-info-item">
                <p class="bid-content-info-item-text">15<span>天</span></p>
                <p class="bid-content-info-item-desc">锁定期</p>
            </div>
        </div>
        <van-progress :percentage="72" color="#2A89FA"/>
        <div class="bid-content-money">
            <div class="bid-content-money-item">
                <p class="bid-content-money-item-num">1,0000.00</p>
                <p class="bid-content-money-item-desc">剩余金额(元)</p>
            </div>
            <div class="bid-content-money-item">
                <p class="bid-content-money-item-num">140,0000.00</p>
                <p class="bid-content-money-item-desc">总金额(元)</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { Progress } from 'vant';
    export default {
        name: "bid-content",
        components:{
            [Progress.name]:Progress
        }
    }
</script>

<style lang="scss">
    .bid-content{
        background-color: #FFFFFF;
        padding: 0 0.533rem 0.32rem;
        .money-com-title-text{
            text-indent: 0;
        }
        &-info{
            display: flex;
            &-item{
                flex: 1;
                text-align: center;
                padding-top: 0.667rem;
                &-text{
                    font-size: 1.013rem;
                    line-height: 0.773rem;
                    span{
                        font-size: 0.587rem;
                    }
                }
                &-desc{
                    color: #B2B2B5;
                    font-size: 0.267rem;
                    line-height: 0.333rem;
                    padding-top: 0.2rem;
                }
            }
        }
        .van-progress{
            height: 0.093rem;
            background: #F4F4F4;
            border-radius: 0.093rem;
            margin-top: 0.8rem;
        }
        .van-progress__pivot{
            font-size: 0.213rem;
        }
        &-money{
            display: flex;
            margin-top: 0.267rem;
            &-item{
                flex: 1;
                &-num{
                    font-size: 0.48rem;
                    font-weight: bold;
                }
                &-desc{
                    font-size: 0.347rem;
                    color: #666666;
                    margin-top: 0.267rem;
                }
                &:last-of-type{
                    text-align: right;
                }
            }
        }
    }
</style>