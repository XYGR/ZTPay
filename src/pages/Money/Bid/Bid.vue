<template>
    <div class="page sub-page" id="bid">
        <app-header title="新手专享"></app-header>
        <app-scroll class="content">
            <bid-content></bid-content>
        </app-scroll>
    </div>
</template>

<script>
    import AppHeader from "../../../components/AppHeader";
    import AppScroll from "../../../components/AppScroll";
    import Content from "./Children/Content";
    export default {
        name: "Bid",
        components:{
            [AppHeader.name]:AppHeader,
            [AppScroll.name]:AppScroll,
            [Content.name]:Content
        }
    }
</script>

<style lang="scss">
    #bid{
        background-color: #F8F8F8;
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