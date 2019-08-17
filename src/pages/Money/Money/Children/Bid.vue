<template>
    <div class="money-bid">
        <h1 class="money-bid-title">{{data.title}}</h1>
        <ul class="money-bid-list">
            <li class="money-bid-item" v-for="(item,index) in data.list" :key="index">
                <h3 class="money-com-title">
                    <p class="money-com-title-text">{{item.imName}}</p>
                    <p class="money-com-title-tag" v-for="tag in item.tags" :class="tag.class">{{tag.value}}</p>
                </h3>
                <div class="money-bid-item-block">
                    <div class="money-bid-item-info rate">
                        <p class="money-bid-item-info-text">{{item.rate.text[0]}}<span>{{item.rate.text[1]}}</span></p>
                        <p class="money-bid-item-info-desc">{{item.rate.desc}}</p>
                    </div>
                    <div class="money-bid-item-info days">
                        <p class="money-bid-item-info-text">{{item.days.text[0]}}<span>{{item.days.text[1]}}</span></p>
                        <p class="money-bid-item-info-desc">{{item.days.desc}}</p>
                    </div>
                    <router-link class="money-bid-item-btn" :to="{path:`/money/bid/+${item.itId}`}" >立即投标</router-link>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "money-bid",
        props:{
            data:Object
        }
    }
</script>

<style scoped lang="scss">
    .money-bid{
        background-color: #ffffff;
        padding: 0 0.56rem 0.4rem;
        &-title{
            font-size: 0.507rem;
            line-height: 0.8rem;
            font-weight: bold;
            padding-top: 0.32rem;
            padding-bottom: 0.48rem;
        }
        &-item{
            height: 3.333rem;
            box-shadow: 0 0.02rem 0.3rem #999;
            border-radius: 0.133rem;
            margin-bottom: 0.4rem;
            &-block{
                margin-top: 0.48rem;
                padding: 0 0.427rem;
                display: flex;
                justify-content: space-between;
            }
            &-info{
                flex: 1;
                &-text{
                    font-size: 0.6rem;
                    span{
                        font-size: 0.347rem;
                    }
                }

                &.rate{
                    color: #FD5350;
                }
                &.days{
                    color: #0E132E;
                }
                &-desc{
                    color: #98A0A8;
                }
            }
            &-btn{
                width: 1.867rem;
                height: 0.8rem;
                line-height: 0.8rem;
                display: block;
                border-radius: 0.4rem;
                background-color: #2186FE;
                color: #ffffff;
                text-align: center;
                font-size: 0.347rem;
            }
        }
    }
</style>