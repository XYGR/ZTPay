<template>
    <div class="money-hot">
        <template v-if="data">
        <h2 class="money-hot-title">{{data.title}}</h2>
        <div class="money-hot-main" v-for="item in data.list" :key="item.id">
            <h3 class="money-com-title">
                <p class="money-com-title-text">{{item.imName}}</p>
                <p class="money-com-title-tag" v-for="tag in item.tags" :class="tag.class">{{tag.value}}</p>
            </h3>
            <div class="money-hot-main-info">
                <div class="money-hot-main-info-rate">
                    <p class="money-hot-main-info-rate-text">{{item.rate.text[0]}}<span>{{item.rate.text[1]}}</span></p>
                    <p class="money-hot-main-info-rate-desc">{{item.rate.desc}}</p>
                </div>
                <div class="money-hot-main-info-days">
                    <p class="money-hot-main-info-days-text">{{item.days.text[0]}}<span>{{item.days.text[1]}}</span></p>
                    <p class="money-hot-main-info-days-desc">{{item.days.desc}}</p>
                </div>
            </div>
            <router-link class="money-hot-main-btn" :to="{path:`/money/bid/+${item.itId}`}" >立即投标</router-link>
            <div class="money-hot-main-desc">万元预计利息49.32元</div>
        </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: "money-hot",
        props:{
            data:Object
        }
    }
</script>

<style scoped lang="scss">
    .money-hot{
        background-color: #ffffff;
        overflow: hidden;
        padding: 0 0.56rem 0.4rem;
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
            box-shadow: 0 0.02rem 0.3rem #999;
            border-radius: 0.4rem;
            &-info{
                display: flex;
                padding: 0 0.56rem;
                margin-top: 0.9rem;
                margin-bottom: 0.4rem;
                &-rate{
                    flex: 1;
                    text-align: center;
                    &-text{
                        font-size: 0.72rem;
                        color: #FD5350;
                        margin-bottom: 0.133rem;
                        span{
                            font-size: 0.453rem;
                        }
                    }
                    &-desc{
                        font-size: 0.267rem;
                        color: #98A0A8;
                    }
                }
                &-days{
                    flex: 1;
                    text-align: center;
                    &-text{
                        font-size: 0.72rem;
                        color: #0E132E;
                        margin-bottom: 0.133rem;
                        span{
                            font-size: 0.453rem;
                        }
                    }
                    &-desc{
                        font-size: 0.267rem;
                        color: #98A0A8;
                    }
                }
            }
            &-btn{
                width: 7.787rem;
                height: 1.2rem;
                display: block;
                line-height: 1.2rem;
                text-align: center;
                margin: 0 auto;
                background-color: #2A89FA;
                border-radius: 0.6rem;
                font-size: 0.4rem;
                color: #fff;
            }
            &-desc{
                color: #000000;
                font-size: 0.293rem;
                line-height: 0.56rem;
                text-align: center;
                margin-top: 0.333rem;
                padding-bottom: 0.587rem;
            }
        }
    }
</style>