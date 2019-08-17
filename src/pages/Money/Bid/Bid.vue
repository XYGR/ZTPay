<template>
    <div class="page sub-page" >
        <div id="bid">
            <app-header title="新手专享"></app-header>
            <app-scroll class="content">
                <bid-content></bid-content>
                <bid-info></bid-info>
            </app-scroll>
            <bid-submit></bid-submit>
        </div>
        <transition name="van-slide-right">
            <router-view></router-view>
        </transition>
    </div>

</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import AppScroll from "../../../components/AppScroll";
    import Content from "./Children/Content";
    import BidInfo from "./Children/Info";
    import BidSubmit from "./Children/Submit";
    export default {
        name: "Bid",
        components:{
            BidSubmit,
            [BidInfo.name]:BidInfo,
            [AppHeader.name]:AppHeader,
            [AppScroll.name]:AppScroll,
            [Content.name]:Content
        }
    }
</script>

<style lang="scss">
    #bid{
        background-color: #FFF;
    }
    .money-com-title{
        font-size: 0.32rem;
        padding-top: 0.347rem;
        height: 0.8rem;
        display: flex;
        align-items: center;
        &-text{
            text-indent: 0.427rem;
        }
        &-tag{
            width: 1.36rem;
            height: 0.347rem;
            line-height: 0.347rem;
            text-align: center;
            font-size: 0.267rem;
            margin-left: 0.133rem;
            border-radius: 0.08rem;
            &.solid{
                border: 0.013rem solid #d46e6c;
                background-color: #FC5250;
                color: #ffffff;
            }
            &.hollow{
                border: 0.013rem solid #CBA04B;
                background-color: transparent;
                color: #CBA04B;
            }
        }
    }
</style>