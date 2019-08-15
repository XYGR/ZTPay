<template>
    <div class="money-bid">
        <h1 class="money-bid-title">{{data.title}}</h1>
        <ul class="money-bid-list">
            <li class="money-bid-item" v-for="(item,index) in data.bidData" :key="index">
                <h3 class="money-com-title">
                    <p class="money-com-title-text">{{item.title}}</p>
                    <p class="money-com-title-tag" v-for="tag in item.tags" :class="tag.class">{{tag.value}}</p>
                </h3>
                <div class="money-com-info">

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
        }
    }
</style>