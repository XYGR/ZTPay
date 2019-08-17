<template>
    <div class="mine-balance">
        <div class="mine-balance-assets">
            <router-link to="/mine/assets">
                <h3 class="mine-balance-assets-title">总资产(元)</h3>
                <p class="mine-balance-assets-money">
                    <span class="mine-balance-assets-money-before">0</span>
                    <span class="mine-balance-assets-money-after">.00</span>
                </p>
            </router-link>
        </div>
        <div class="mine-balance-profit">
            <div class="mine-balance-profit-item interest">
                <h4 class="mine-balance-profit-item-title">昨日利息(元)</h4>
                <p class="mine-balance-profit-item-ele">0.00</p>
            </div>
            <div class="mine-balance-profit-item interest">
                <h4 class="mine-balance-profit-item-title">昨日利息(元)</h4>
                <p class="mine-balance-profit-item-ele">0.00</p>
            </div>
        </div>
        <p class="mine-balance-tips">平均1分钟赚取不足0.01元...努力啊！</p>
    </div>
</template>

<script>
    export default {
        name: "mine-balance"
    }
</script>

<style lang="scss">
    .mine-balance{
        height: 5.12rem;
        border-radius: 0.267rem;
        background-color: #1F7DFD;
        padding: 0 0.533rem;
        transform: translateY(0.693rem);
        &-assets{
            padding-top: 0.267rem;
            &-title{
                font-size: 0.347rem;
                line-height: 0.613rem;
                color: #FFFFFF;
                opacity: .5;
            }
            &-money{
                font-family:ArialMT;
                color: #FFFFFF;
                font-weight: 400;
                &-before{
                    font-size: 0.72rem;
                }
                &-after{
                    font-size: 0.507rem;
                    font-weight: 400;
                }
            }
        }
        &-profit{
            margin-top: 0.627rem;
            display: flex;
            &-item{
                flex: 1;
                color: #FFFFFF;
                &-title{
                    font-size: 0.347rem;
                    line-height: 0.333rem;
                    opacity: .5;
                }
                &-ele{
                    font-size: 0.507rem;
                    margin-top: 0.4rem;
                }
            }
        }
        &-tips{
            font-size: 0.32rem;
            color: #FFFFFF;
            opacity: .5;
            margin-top: 0.6rem;
        }
    }
</style>