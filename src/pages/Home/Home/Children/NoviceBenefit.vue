<template>
    <div class="novice-benefit">
        <h1 class="novice-benefit-title">新手福利</h1>
        <p class="novice-benefit-desc">新手入门即得超值好礼</p>
        <div class="novice-benefit-main">
            <img src="../../../../assets/home/home_licai.png" alt="" class="novice-benefit-main-img">
            <button class="novice-benefit-main-btn">立即领取</button>
            <p class="novice-benefit-main-sum">已有<span>323556</span>人领取成功</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "novice-benefit"
    }
</script>

<style scoped lang="scss">
    .novice-benefit {
        margin-top: 0.267rem;
        background-color: #ffffff;
        padding-top: 0.267rem;
        padding-bottom: 0.773rem;

        &-title {
            font-size: 0.56rem;
            text-align: center;
            color: #3399ff;
        }

        &-desc {
            font-size: 0.293rem;
            color: #999999;
            text-align: center;
            line-height: 0.427rem;
        }

        &-main {
            width: 6.667rem;
            height: 4.453rem;
            box-shadow: 0rem 0.02rem 0.3rem #999;
            margin: 0.133rem auto 0px;
            border-radius: 0.4rem;
            overflow: hidden;

            &-img {
                width: 5.933rem;
                height: 2.067rem;
                margin: 0.32rem auto;
            }

            &-btn {
                width: 5.733rem;
                height: 0.96rem;
                display: block;
                background: #2A89FA;
                border-radius: 0.48rem;
                font-size: 0.4rem;
                font-weight: bold;
                text-align: center;
                color: #fff;
                line-height: 0.96rem;
                margin: 0 auto;
            }
            &-sum{
                font-size: 0.24rem;
                line-height: 0.64rem;
                margin-top: 0.133rem;
                margin-bottom: 0.04rem;
                text-align: center;
                span{
                    color: #FD7B4B;
                }
            }
        }
    }
</style>