<template>
    <div class="record-content">
        <h2 class="record-content-title">近一个月投标记录</h2>
        <ul class="record-content-list">
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
            <li class="record-content-user border-top">
                <img src="../../../../assets/money/Bid_touxiang.webp" alt="" class="record-content-user-avatar">
                <div class="record-content-user-block">
                    <h4 class="record-content-user-name">杨**</h4>
                    <p class="record-content-user-time">2019-07-26 16:48:28</p>
                </div>
                <p class="record-content-user-money">￥20000000</p>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "record-content"
    }
</script>

<style scoped lang="scss">
    .record-content{
        background-color: #FFFFFF;
        padding: 2.267rem 0.533rem 0;
        &-title{
            font-size: 0.453rem;
            line-height: 0.507rem;
            padding-bottom: 0.653rem;
            background: url("../../../../assets/money/Bid_icon.webp") no-repeat left top;
            background-size: 0.507rem;
            text-indent: 0.56rem;
        }
        &-user{
            height: 1.84rem;
            display: flex;
            align-items: center;
            &::before{
                border-color: #E4E4E4;
            }
            &-avatar{
                width: 0.8rem;
                height: 0.8rem;
                margin-right: 0.4rem;
            }
            &-block{
                flex: 1;
            }
            &-name{
                font-size: 0.453rem;
            }
            &-titme{
                font-size: 0.267rem;
                color: #999;
            }
            &-money{
                font-size: 0.453rem;
            }
        }
    }
</style>