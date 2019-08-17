<template>
    <div class="bid-withdraw-status">
        <h2 class="bid-withdraw-status-title"><img src="../../../../assets/money/logo.png" alt=""> 海南智投金服责任有限公司</h2>
        <p class="bid-withdraw-status-info">¥{{$route.params.amount}}</p>
        <p class="bid-withdraw-status-info">投标已撤回</p>
    </div>
</template>

<script>
    export default {
        name: "bid-withdraw-status"
    }
</script>

<style scoped lang="scss">
    .bid-withdraw-status{
        height: 5.12rem;
        padding: 1.2rem 0.533rem 1.733rem;
        box-sizing: border-box;
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
    }
</style>